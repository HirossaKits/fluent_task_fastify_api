// import fastify from "fastify"
import { getUser, addUser } from '../../controller/userController';

const User = {
  user_id: { type: 'string' },
  org_id: { type: 'string' },
  is_org_rep: { type: 'string' },
  is_org_admin: { type: 'string' },
  //   assigned_task: { type: 'string' },
};

const getUserOpts = {
  schema: {
    params: {
      user_id: { type: 'string' },
    },
    response: {
      200: User,
    },
  },
  handler: getUser,
};

const postUserOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        org_id: { type: 'string' },
      },
    },
  },
  handler: addUser,
};

const org = async (fastify: any, options: any, done: any) => {
  fastify.get('/:user_id', getUserOpts);
  fastify.post('/', postUserOpts);
  done();
};

export default org;
