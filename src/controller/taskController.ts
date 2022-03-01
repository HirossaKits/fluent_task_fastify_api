import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getTasks = async (req: any, reply: any) => {
  try {
    const { project_id } = req.params;
    const tasks = await prisma.task.findMany({
      where: { project_id: project_id },
    });
    reply.send(tasks);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addTask = async (req: any, reply: any) => {
  try {
    await prisma.task.create({
      data: req.body,
    });
    const tasks = await prisma.task.findMany({
      where: { project_id: req.body.project_id },
    });
    reply.send(tasks);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateTask = async (req: any, reply: any) => {
  try {
    const { task_id } = req.params;
    await prisma.task.update({ where: { task_id: task_id }, data: req.body });
    const tasks = await prisma.task.findMany({
      where: { project_id: req.body.project_id },
    });
    reply.send(tasks);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteTask = async (req: any, reply: any) => {
  try {
    const { task_id } = req.params;
    await prisma.task.delete({ where: { task_id: task_id } });
    const tasks = await prisma.task.findMany({
      where: { project_id: req.body.project_id },
    });
    reply.send(tasks);
  } catch (error) {
    reply.status(500).send(error);
  }
};
