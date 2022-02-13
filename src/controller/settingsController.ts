const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getSettings = async (req: any, reply: any) => {
  try {
    const { user_id } = req.body;
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

export const updateSettings = async (request: any, reply: any) => {
  try {
    const { user_id } = request.body;
    const settings = await prisma.settings.update({
      where: {
        user_id: user_id,
      },
      data: request.body,
    });
    reply.send(settings);
  } catch (error) {
    reply.status(500).send(error);
  }
};
