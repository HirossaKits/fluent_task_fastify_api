import fastify from 'fastify';
import * as userSchema from './schema';
import * as userController from '../../../controller/userController';

const org = async (fastify: any, options: any, done: any) => {
  fastify.get('/', { schema: userSchema.getUser }, userController.getUser);
  fastify.put(
    '/:user_id',
    { schema: userSchema.updateUser, preValidation: [fastify.authen] },
    userController.updateUser
  );
  fastify.delete(
    '/:user_id',
    { preValidation: [fastify.authen] },
    userController.deleteUser
  );
  done();
};

export default org;
