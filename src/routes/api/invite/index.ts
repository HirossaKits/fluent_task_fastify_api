import * as schema from './schema';
import * as inviteController from '../../../controller/inviteController';

const invite = async (fastify: any, option: any, done: any) => {
  fastify.get(
    '/user/:user_id',
    { schema: schema.getInvite },
    inviteController.getInvite
  );
  fastify.post('/', { schema: schema.addInvite }, inviteController.addInvite);
  fastify.put(
    '/:invite_id',
    { schema: schema.updateInvite },
    inviteController.updateInvite
  );
  fastify.delete(
    '/',
    { schema: schema.deleteInvite },
    inviteController.deleteInvite
  );

  done();
};

export default invite;
