import { join } from 'path';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
export type AppOptions = {} & Partial<AutoloadPluginOptions>;
const path = require('path');

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place here your custom code!s
  fastify.register(require('fastify-cors'), {
    origin: process.env.ALLOWED_ORIGIN,
  });

  fastify.register(require('fastify-static'), {
    root: path.resolve(__dirname, '../public'),
    prefix: '/public/',
  });

  // fastify.register(require('fastify-multipart'), {
  //   limits: {
  //     fieldNameSize: 100, // Max field name size in bytes
  //     fieldSize: 100, // Max field value size in bytes
  //     fields: 10, // Max number of non-file fields
  //     fileSize: 1000000, // For multipart forms, the max file size in bytes
  //     files: 1, // Max number of file fields
  //     headerPairs: 10, // Max number of header key=>value pairs
  //   },
  // });

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts,
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts,
  });
};

export default app;
export { app };
