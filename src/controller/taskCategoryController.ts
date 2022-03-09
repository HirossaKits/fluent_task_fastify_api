const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getTaskCategory = async (req, reply) => {
  try {
    const { project_id } = req.params;
    const TaskCategory = await prisma.TaskCategory.findMany({
      include: { category: true },
    });
    reply.send(TaskCategory);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addTaskCategory = async (req, reply) => {
  try {
    const TaskCategory = await prisma.TaskCategory.create({
      data: req.body,
    });
    reply.status(201).send(TaskCategory);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteTaskCategory = async (req, reply) => {
  const { id } = req.params;
  try {
    const deleteTaskCategory = await prisma.TaskCategory.delete({
      where: {
        id: id,
      },
    });
    reply.send(deleteTaskCategory);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateTaskCategory = async (req, reply) => {
  try {
    const { id } = req.params;
    const TaskCategory = await prisma.TaskCategory.update({
      where: {
        id: id,
      },
      data: req.body,
      include: { category: true },
    });
    reply.send(TaskCategory);
  } catch (error) {
    reply.status(500).send(error);
  }
};
