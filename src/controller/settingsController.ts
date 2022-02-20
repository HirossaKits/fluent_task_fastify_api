const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getSettings = async (req: any, reply: any) => {
  try {
    const { user_id } = req.params;
    const settings = await prisma.settings.findUnique({
      where: {
        user_id: user_id,
      },
    });
    reply.send(settings);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateSettings = async (req: any, reply: any) => {
  try {
    const { user_id } = req.params;
    const settings = await prisma.settings.update({
      where: {
        user_id: user_id,
      },
      data: req.body,
    });
    reply.send(settings);
  } catch (error) {
    reply.status(500).send(error);
  }
};
