const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

const generateToken = ({ user_id }): string => {
  const payload = { user_id };
  return jwt.sign(payload, process.env.JWT_SECRET);
};

export const signup = async (req: any, reply: any) => {
  try {
    req.body.password = hashPassword(req.body.password);
    const user = await prisma.user.create({
      data: req.body,
    });
    await prisma.settings.create({
      data: { user_id: user.user_id },
    });
    const org = await prisma.organization.create({
      data: {
        org_name: 'Private',
        org_owner: { connect: { user_id: user.user_id } },
        org_admin: { connect: [{ user_id: user.user_id }] },
        org_user: { connect: [{ user_id: user.user_id }] },
        is_private: true,
      },
    });
    const token = generateToken({
      user_id: user.user_id,
    });
    reply.send({ access: token });
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const signin = async (req: any, reply: any) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (user && user.password && bcrypt.compareSync(password, user.password)) {
      const token = generateToken({
        user_id: user.user_id,
      });
      reply.send({ access: token });
    } else {
      reply.status(500).send('Invalid email or password');
    }
  } catch (error) {
    reply.status(500).send(error);
  }
};
