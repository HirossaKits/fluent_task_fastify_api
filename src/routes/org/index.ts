import { FastifyPluginAsync } from 'fastify';

import { FastifyInstance, FastifyPluginOptions, FastifyError } from 'fastify';
import {
  getOrganization,
  addOrganization,
  updateOrganization,
} from '../../controller/orgController';

// const Organization = {
//   org_id: { type: 'string' },
//   org_name: { type: 'string' },
//   org_user: {
//     type: 'object',
//     properties: {
//       user_id: { type: 'string' },
//       email: { type: 'string' },
//       is_org_rep: { type: 'boolean' },
//       is_org_admin: { type: 'boolean' },
//       first_name: { type: 'string' },
//       last_name: { type: 'string' },
//       avatar_img: { type: 'string' },
//       comment: { type: 'string' },
//     },
//   },
// };

const Organization = {
  org_id: { type: 'string' },
  org_name: { type: 'string' },
};

const getOrganizationOpts = {
  schema: {
    params: {
      org_id: { type: 'string' },
    },
    response: {
      200: Organization,
    },
  },
  handler: getOrganization,
};

const postOrganizationOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['org_name'],
      properties: {
        org_name: { type: 'string' },
      },
    },
  },
  handler: addOrganization,
};

const updateOrganizationOpts = {
  schema: {
    param: {
      org_id: { type: 'string' },
    },
    response: {
      200: Organization,
    },
  },
  handler: updateOrganization,
};

const deleteOrganizationOpts = {
  schema: {
    param: {
      org_id: {type: 'string'},
    },
    response: {
      200: Organization,
    },
  },
  handler: 
}

const org = async (fastify: any, options: any, done: any) => {
  fastify.get('/:org_id', getOrganizationOpts);
  fastify.post('/', postOrganizationOpts);
  fastify.put('/:org_id', updateOrganizationOpts);
  fastify.delete('/:org_id',deleteOrganizationOpts);
  //   fastify.delete('/task/:id')
  //   fastify.put('/task/:id')
  done();
};

export default org;
