import * as schema from './schema';
import * as settingsController from '../../../controller/settingsController';

const settings = async (fastify: any, options: any, done: any) => {
  fastify.get(
    '/:user_id',
    { schema: schema.getSettings },
    settingsController.getSettings
  );
  fastify.put(
    '/:user_id',
    { schema: schema.updateSettings },
    settingsController.updateSettings
  );
};

export default settings;
