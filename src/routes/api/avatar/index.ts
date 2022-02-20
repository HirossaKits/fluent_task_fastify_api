import fastify from 'fastify';
import { updateProfile } from '../../../controller/avatarController';
import * as schema from './schema';

// const getProfileOpts = {
//   schema: {
//     params: {
//       user_id: { type: 'string' },
//     },
//     response: {
//       200: Profile,
//     },
//   },
//   handler: getProfile,
// };

const profile = async (fastify: any, options: any, done: any) => {
  fastify.post('/:user_id', { schema: schema.updateProfile }, updateProfile);
};

export default profile;
