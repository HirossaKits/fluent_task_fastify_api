import * as schema from './schema';
import * as projectController from '../../../controller/projectController';

const project = async (fastify: any, option: any, done: any) => {
  fastify.get(
    '/org/:org_id',
    { schema: schema.getProjectsFromOrg },
    projectController.getProjectFromOrg
  );
  done();
};

export default project;
