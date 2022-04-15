import * as schema from './schema';
import * as projectController from '../../controller/projectController';

const project = async (fastify: any, option: any, done: any) => {
  fastify.get(
    '/org/:org_id',
    { schema: schema.getProjectsFromOrg },
    projectController.getProjectFromOrg
  );
  fastify.post(
    '/',
    { schema: schema.addProject },
    projectController.addProject
  );

  fastify.put(
    '/:project_id',
    { schema: schema.updateProject },
    projectController.updateProject
  );
  fastify.delete(
    '/:project_id',
    { schema: schema.deleteProject },
    projectController.deleteProject
  );
  done();
};

export default project;
