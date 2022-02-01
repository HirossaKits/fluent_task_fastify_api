const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const getUser = async (req: any, reply: any) => {
  try {
    const { user_id } = req.params;
    const user = await prisma.user.findUnique({
      where: { user_id: user_id },
    });
    reply.send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addUser = async (req: any, reply: any) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    reply.send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
};
