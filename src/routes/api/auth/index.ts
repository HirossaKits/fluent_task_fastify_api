import { signup, signin } from '../../../controller/authController';

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
      200: { access: { type: 'string' } },
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
      200: { access: { type: 'string' } },
    },
  },
  handler: signin,
};

const auth = async (fastify: any, options: any, done: any) => {
  fastify.post('/signup', signupOpts);
  fastify.post('/signin', signinOpts);
};

export default auth;
