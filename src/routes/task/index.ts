import * as schema from './schema';
import * as taskController from '../../controller/taskController';

const task = async (fastify: any, option: any, done: any) => {
  fastify.get(
    '/project/:project_id',
    { schema: schema.getTasks },
    taskController.getTasks
  );
  fastify.post('/', { schema: schema.addTask }, taskController.addTask);
  fastify.put(
    '/:task_id',
    { schema: schema.updateTask },
    taskController.updateTaskStatus
  );
  fastify.put(
    '/status/:task_id',
    { schema: schema.updateTaskStatus },
    taskController.deleteTask
  );
  fastify.delete(
    '/project/:project_id',
    { schema: schema.deleteTask },
    taskController.deleteTask
  );

  done();
};

export default task;
