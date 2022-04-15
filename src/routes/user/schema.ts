export const User = {
  user_id: { type: 'string' },
  is_premium: { type: 'boolean' },
  first_name: { type: 'string' },
  last_name: { type: 'string' },
  avatar_img: { type: 'string' },
  comment: { type: 'string' },
  joined_org: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        org_id: { type: 'string' },
        org_name: { type: 'string' },
        is_private: { type: 'boolean' },
      },
    },
  },
};

export const getUser = {
  response: {
    200: User,
  },
};

export const updateUser = {
  params: {
    user_id: { type: 'string' },
  },
  body: {
    type: 'object',
    properties: {
      org_id: { type: 'string' },
      is_org_rep: { type: 'boolean' },
      is_org_admin: { type: 'boolean' },
    },
  },
};
