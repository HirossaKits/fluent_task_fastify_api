import fastify from 'fastify';
import { updateAvatar } from '../../../controller/avatarController';
import * as schema from './schema';

const profile = async (fastify: any, options: any, done: any) => {
  fastify.post('/:user_id', { schema: schema.updateAvatar }, updateAvatar);
};

export default profile;
