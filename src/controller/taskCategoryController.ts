const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getTaskCategory = async (req, reply) => {
  try {
    const { project_id } = req.params;
    console.log('debug', project_id);
    const taskcategory = await prisma.TaskCategory.findMany({
      where: { project_id: project_id },
    });
    reply.send(taskcategory);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addTaskCategory = async (req, reply) => {
  try {
    const taskcategory = await prisma.taskcategory.create({
      data: req.body,
    });
    reply.status(201).send(taskcategory);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteTaskCategory = async (req, reply) => {
  const { id } = req.params;
  try {
    const deleteTaskCategory = await prisma.taskcategory.delete({
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
    const TaskCategory = await prisma.taskcategory.update({
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
