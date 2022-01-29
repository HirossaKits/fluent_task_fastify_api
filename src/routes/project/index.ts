import { FastifyInstance, FastifyPluginOptions, FastifyError } from 'fastify';

const getProjectOpt = {
  schema: {
    params: {
      project_id: { type: 'string' },
      project_name: { type: 'string' },
      org_id: { type: 'string' },
      resp_id: { type: 'string' },
      member_id: { type: 'array', items: { type: 'string' } },
      description: { type: 'string' },
      startdate: { type: 'string' },
      enddate: { type: 'string' },
      task_category: { type: 'array', items: { type: 'string' } },
    },
  },
};

// test

export default function projectRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: (err?: FastifyError) => void
) {
  fastify.get('/projects');
  // fastify.get('/tasks/:id')
  // fastify.post('/task/:id')
  // fastify.delete('/task/:id')
  // fastify.put('/task/:id')
  done();
}
