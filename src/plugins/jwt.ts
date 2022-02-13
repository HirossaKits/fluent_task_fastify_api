import fp from 'fastify-plugin';

export default fp(async (fastify, opts) => {
  fastify.register(require('fastify-jwt'), {
    secret: process.env.JWT_SECRET,
    message: {
      badRequestErrorMessage: 'Format is Authorization: Bearer [token]',
      noAuthorizationInHeaderMessage: 'Autorization header is missing!',
      authorizationTokenExpiredMessage: 'Authorization token expired',
      authorizationTokenInvalid: (err) => {
        return `Authorization token is invalid: ${err.message}`;
      },
    },
  });

  fastify.decorate('authen', async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
});
