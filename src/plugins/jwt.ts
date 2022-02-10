import fp from 'fastify-plugin';
// require('dotenv').config();

export default fp(async (fastify, opts) => {
  fastify.register(require('fastify-jwt'), {
    secret: process.env.JWT_SECRET,
  });
});
