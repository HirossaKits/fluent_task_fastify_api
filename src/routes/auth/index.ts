import { signup, signin } from '../../controller/authController';

const User = {
  user_id: { type: 'string' },
  first_name: { type: 'string' },
  last_name: { type: 'string' },
  avatar_img: { type: 'string' },
  comment: { type: 'string' },
  org_id: { type: 'string' },
  is_org_rep: { type: 'boolean' },
  is_org_admin: { type: 'boolean' },
};

const signupOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
      },
    },
    response: {
      200: { login_user: User, token: { type: 'string' } },
    },
  },
  handler: signup,
};

const signinOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
      },
    },
    response: {
      200: { login_user: User, token: { type: 'string' } },
    },
  },
  handler: signin,
};

const auth = async (fastify: any, options: any, done: any) => {
  fastify.post('/signup', signupOpts);
  fastify.post('/signin', signinOpts);
};

export default auth;
