import { User } from '../user/schema';

const Organization = {
  org_id: { type: 'string' },
  org_name: { type: 'string' },
  org_owner_id: { type: 'string' },
  // org_owner: { type: 'string' },
  org_admin_id: {
    type: 'array',
    items: { type: 'string' },
  },
  org_user: {
    type: 'array',
    items: { type: 'object', properties: User },
  },
};

export const getOrganization = {
  params: {
    org_id: { type: 'string' },
  },
  response: {
    200: Organization,
  },
};

export const getPrivateOrganization = {
  params: {
    owner: { type: 'string' },
  },
  response: {
    200: Organization,
  },
};

export const getPublicOrganization = {
  params: {
    user_id: { type: 'string' },
  },
  response: {
    200: Organization,
  },
};

export const addOrganization = {
  params: {
    org_id: { type: 'string' },
  },
  body: {
    type: 'object',
    properties: {
      org_name: { type: 'string' },
    },
  },
  response: {
    200: Organization,
  },
};

export const updateOrganization = {
  param: {
    org_id: { type: 'string' },
  },
  body: {
    type: 'object',
    properties: {
      org_name: { type: 'string' },
    },
  },
  response: {
    200: Organization,
  },
};

export const deleteOrganization = {
  param: {
    org_id: { type: 'string' },
  },
  response: {
    200: Organization,
  },
};
