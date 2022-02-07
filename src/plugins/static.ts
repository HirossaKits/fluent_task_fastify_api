import fp from 'fastify-plugin';
const path = require('path');

export default fp(async (fastify, opts) => {
  fastify.register(require('fastify-static'), {
    root: path.resolve(__dirname, '../../public'),
    prefix: '/public/',
  });
});
