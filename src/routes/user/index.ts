// import fastify from "fastify"
import {
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from '../../controller/userController';

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
        is_org_rep: { type: 'boolean' },
        is_org_admin: { type: 'boolean' },
      },
    },
  },
  handler: addUser,
};

const updateUserOpts = {
  schema: {
    param: {
      org_id: { type: 'string' },
      is_org_rep: { type: 'boolean' },
      is_org_admin: { type: 'boolean' },
    },
  },
  handler: updateUser,
};

const deleteUserOpts = {
  schema: {
    param: {
      org_id: { type: 'string' },
      is_org_rep: { type: 'boolean' },
      is_org_admin: { type: 'boolean' },
    },
  },
  handler: deleteUser,
};

const org = async (fastify: any, options: any, done: any) => {
  fastify.get('/:user_id', getUserOpts);
  fastify.post('/', postUserOpts);
  fastify.put('/:user_id', updateUserOpts);
  fastify.delete('/:user_id', deleteUserOpts);
  done();
};

export default org;
