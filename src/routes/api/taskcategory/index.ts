import * as schema from './schema';
import * as settingsController from '../../../controller/taskCategoryController';

const taskcategory = async (fastify: any, options: any, done: any) => {
  fastify.get(
    'project/:project_id',
    { schema: schema.getTaskCategory },
    settingsController.getTaskCategory
  );
  fastify.post(
    '/',
    { schema: schema.addTaskCategory },
    settingsController.addTaskCategory
  );
  fastify.put(
    '/:task_category_id',
    { schema: schema.updateTaskCategory },
    settingsController.updateTaskCategory
  );
  fastify.delete(
    '/:task_category_id',
    { schema: schema.deleteTaskCategory },
    settingsController.deleteTaskCategory
  );
};

export default taskcategory;
