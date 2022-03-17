const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getTaskCategory = async (req, reply) => {
  try {
    const { project_id } = req.params;
    const taskCategory = await prisma.TaskCategory.findMany({
      where: { project_id: project_id },
      orderBy: { task_category_id: 'asc' },
    });
    reply.send(taskCategory);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addTaskCategory = async (req, reply) => {
  try {
    const taskCategory = await prisma.TaskCategory.create({
      data: req.body,
    });
    const taskCategories = await prisma.TaskCategory.findMany({
      where: { project_id: taskCategory.project_id },
      orderBy: { task_category_id: 'asc' },
    });
    reply.status(201).send(taskCategories);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateTaskCategory = async (req, reply) => {
  try {
    const { task_category_id } = req.params;
    const taskCategory = await prisma.TaskCategory.update({
      where: { task_category_id: task_category_id },
      data: req.body,
    });
    const taskCategories = await prisma.TaskCategory.findMany({
      where: { project_id: taskCategory.project_id },
      orderBy: { task_category_id: 'asc' },
    });
    reply.send(taskCategories);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteTaskCategory = async (req, reply) => {
  const { task_category_id } = req.params;
  try {
    const taskCategory = await prisma.TaskCategory.delete({
      where: { task_category_id: task_category_id },
    });
    const taskCategories = await prisma.TaskCategory.findMany({
      where: { project_id: taskCategory.project_id },
      orderBy: { task_category_id: 'asc' },
    });
    console.log(taskCategories);
    reply.send(taskCategories);
  } catch (error) {
    reply.status(500).send(error);
  }
};
