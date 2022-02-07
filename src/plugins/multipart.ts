import fp from 'fastify-plugin';

export default fp(async (fastify, opts) => {
  fastify.register(require('fastify-multipart'), {
    limits: {
      fieldNameSize: 100, // Max field name size in bytes
      fieldSize: 100, // Max field value size in bytes
      fields: 10, // Max number of non-file fields
      fileSize: 1000000, // For multipart forms, the max file size in bytes
      files: 1, // Max number of file fields
      headerPairs: 10, // Max number of header key=>value pairs
    },
  });
});
