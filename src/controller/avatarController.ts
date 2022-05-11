// import { PrismaClient } from '@prisma/client';
// require('dotenv').config();
// const fs = require('fs');
// const util = require('util');
// const { pipeline } = require('stream');
// const pump = util.promisify(pipeline);

// const prisma = new PrismaClient();

// export const updateAvatar = async (req: any, reply: any) => {
//   try {
//     const { user_id } = req.params;
//     const data = await req.file();

//     if (data.fieldname != 'upload_file') {
//       reply.send(500).send(`Field ${data.fieldname} is not appropriate.`);
//     }
//     data.filepath = '../../public/avatar_img';
//     const allowedExt = ['jpeg', 'JPEG', 'ping', 'PING', 'svg', 'SVG'];
//     const ext = data.filename.slice(data.filename.lastIndexOf('.') + 1);
//     const mime = data.mimetype.slice(0, data.mimetype.lastIndexOf('/'));
//     if (mime != 'image' || !allowedExt.includes(ext)) {
//       reply.send(500).send(`Uploaded file type is not allowed.`);
//     }
//     await pump(
//       data.file,
//       fs.createWriteStream(`./public/avatar_img/avator_${user_id}.${ext}`)
//     );
//     const avatar_img =
//       process.env.API_ROOT +
//       `/public/avatar_img/avator_${user_id}.${ext}?${new Date().toLocaleTimeString()}`;

//     const user = await prisma.user.update({
//       where: { user_id: user_id },
//       data: { avatar_img: avatar_img },
//       include: { joined_org: true },
//     });
//     reply.send(user);
//   } catch (error) {
//     reply.status(500).send(error);
//   }
// };

import { PrismaClient } from '@prisma/client';

const fs = require('fs');
const AWS = require('aws-sdk');
const prisma = new PrismaClient();

export const updateAvatar = async (req: any, reply: any) => {
  try {
    const { user_id } = req.params;
    const data = await req.file();
    const file = data.file;
    const fileName = data.filename;

    if (data.fieldname != 'upload_file') {
      reply.send(500).send(`Field ${data.fieldname} is not appropriate.`);
      return;
    }

    const allowedExt = ['jpeg', 'JPEG', 'ping', 'PING', 'svg', 'SVG'];
    const ext = fileName.slice(fileName.lastIndexOf('.') + 1);
    const mime = data.mimetype.slice(0, data.mimetype.lastIndexOf('/'));
    if (mime != 'image' || !allowedExt.includes(ext)) {
      reply.send(500).send(`Uploaded file type is not allowed.`);
      return;
    }

    // call S3 to retrieve upload file to specified bucket
    AWS.config.update({
      aws_access_key_id: process.env.ACCESS_KEY_ID,
      aws_secret_access_key: process.env.SECRET_ACCESS_KEY,
      region: process.env.S3_REGION,
    });

    const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

    // Configure the file stream and obtain the upload parameters
    var uploadParams = {
      Bucket: `${process.env.S3_BUCKET}/public/avatar`,
      Body: file,
      Key: `${user_id}.${ext}`,
    };

    // call S3 to retrieve upload file to specified bucket
    s3.upload(uploadParams, function (error, data) {
      if (error) {
        reply.status(500).send(error);
      }
      if (data) {
        console.log('Upload Success', data.Location);
      }
    });

    const avatar_img =
      process.env.API_ROOT +
      `/public/avatar/${user_id}.${ext}?${new Date().toLocaleTimeString()}`;

    const user = await prisma.user.update({
      where: { user_id: user_id },
      include: { joined_org: true },
      data: { avatar_img: avatar_img },
    });

    console.log(user);
    reply.send(user);
  } catch (error) {
    console.log(error);
    reply.status(500).send(error);
  }
};
