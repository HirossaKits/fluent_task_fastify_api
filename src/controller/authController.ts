const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

const generateToken = ({ user_id, is_org_rep }): string => {
  const payload = { user_id, is_org_rep };
  return jwt.sign(payload, process.env.JWT_SECRET);
};

export const signup = async (req: any, reply: any) => {
  try {
    req.body.password = hashPassword(req.body.password);
    const user = await prisma.user.create({
      data: req.body,
    });
    const token = generateToken({
      user_id: user.user_id,
      is_org_rep: user.is_org_rep,
    });
    reply.send({ login_user: user, token: token });
  } catch (error) {
    reply.status(500).send(error);
  }
};

const signin = async (req: any, reply: any) => {
  try {
  } catch (error) {
    reply.status(500).send(error);
  }
};
