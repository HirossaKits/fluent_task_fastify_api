import { getSettings } from '../../../controller/settingsController';

const Settings = {
  dark_mode: { type: 'boolean' },
  tooltip: { type: 'boolean' },
};

const getSettingsOpts = {
  schema: {
    param: {
      user_id: { type: 'string' },
    },
    response: {
      200: Settings,
    },
  },
  handler: getSettings,
};

const settings = async (fastify: any, options: any, done: any) => {
  fastify.get('/:user_id', getSettingsOpts);
  //   fastify.put('/:user_id');
};

export default settings;
