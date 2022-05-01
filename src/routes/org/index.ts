import { FastifyInstance, FastifyPluginOptions, FastifyError } from 'fastify';
import * as orgController from '../../controller/orgController';
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
  fastify.post(
    '/public',
    { schema: schema.addPublicOrganization },
    orgController.addOrganization
  );
  fastify.put(
    '/:org_id',
    { schema: schema.updateOrganization },
    orgController.updateOrganization
  );
  fastify.put(
    '/admin/include/:org_id',
    { schema: schema.updateOrganizationUserRelation },
    orgController.includeOrganizationAdmin
  );
  fastify.put(
    '/admin/exclude/:org_id',
    { schema: schema.updateOrganizationUserRelation },
    orgController.excludeOrganizationAdmin
  );
  fastify.put(
    '/user/exclude/:org_id',
    { schema: schema.updateOrganizationUserRelation },
    orgController.excludeOrganizationUser
  );
  fastify.delete(
    '/:org_id',
    { schema: schema.deleteOrganization },
    orgController.deleteOrganization
  );
  done();
};

export default org;
