const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getInvite = async (req: any, reply: any) => {
  const { user_id } = req.params;
  try {
    const invite = await prisma.organization.findMany({
      where: { user_id: user_id },
    });
    reply.send(invite);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addInvite = async (req: any, reply: any) => {
  try {
    const invite = await prisma.organization.create({
      data: req.body,
    });
    reply.send(invite);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateInvite = async (req: any, reply: any) => {
  try {
    const { invite_id } = req.params;
    const invite = await prisma.organization.create({
      data: req.body,
    });
    reply.send(invite);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteInvite = async (req: any, reply: any) => {
  try {
    const { invite_id } = req.params;
    const invite = await prisma.organization.delete({
      where: { invite_id: invite_id },
    });
    reply.send(invite);
  } catch (error) {
    reply.status(500).send(error);
  }
};
