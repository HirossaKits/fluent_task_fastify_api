import { FastifyInstance, FastifyPluginOptions, FastifyError } from 'fastify';
import * as orgController from '../../../controller/orgController';
import * as schema from './schema';

const org = async (fastify: any, options: any, done: any) => {
  fastify.get(
    '/:org_id',
    { schema: schema.getOrganization },
    orgController.getOrganization
  );
  fastify.get(
    '/private/:owner',
    { schema: schema.getPrivateOrganization },
    orgController.getPrivateOrganization
  );
  fastify.get(
    '/public/:user_id',
    { schema: schema.getPublicOrganization },
    orgController.getPublicOrganization
  );
  fastify.post(
    '/',
    { schema: schema.addOrganization },
    orgController.addOrganization
  );
  fastify.put(
    '/:org_id',
    { schema: schema.updateOrganization },
    orgController.updateOrganization
  );
  fastify.delete(
    '/:org_id',
    { schema: schema.deleteOrganization },
    orgController.deleteOrganization
  );
  done();
};

export default org;
