import { PrismaClient } from '@prisma/client';
require('dotenv').config();
const fs = require('fs');
const util = require('util');
const { pipeline } = require('stream');
const pump = util.promisify(pipeline);

const prisma = new PrismaClient();

export const updateAvatar = async (req: any, reply: any) => {
  try {
    const { user_id } = req.params;
    const data = await req.file();
    // const body = Object.fromEntries(
    //   Object.keys(data.fields).map((key) => [key, data.fields[key].value])
    // );

    if (data.fieldname != 'upload_file') {
      reply.send(500).send(`Field ${data.fieldname} is not appropriate.`);
    }
    data.filepath = '../../public/avatar_img';
    const allowedExt = ['jpeg', 'JPEG', 'ping', 'PING', 'svg', 'SVG'];
    const ext = data.filename.slice(data.filename.lastIndexOf('.') + 1);
    const mime = data.mimetype.slice(0, data.mimetype.lastIndexOf('/'));
    if (mime != 'image' || !allowedExt.includes(ext)) {
      reply.send(500).send(`Uploaded file type is not allowed.`);
    }
    await pump(
      data.file,
      fs.createWriteStream(`./public/avatar_img/avator_${user_id}.${ext}`)
    );
    const avatar_img =
      process.env.API_ROOT +
      `/public/avatar_img/avator_${user_id}.${ext}?${new Date().toLocaleTimeString()}`;

    const user = await prisma.user.update({
      where: { user_id: user_id },
      data: { avatar_img: avatar_img },
      include: { joined_org: true },
    });
    reply.send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
};
