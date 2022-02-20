const User = {
  user_id: { type: 'string' },
  first_name: { type: 'string' },
  last_name: { type: 'string' },
  avatar_img: { type: 'string' },
  comment: { type: 'string' },
  org_id: { type: 'string' },
  is_org_rep: { type: 'boolean' },
  is_org_admin: { type: 'boolean' },
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
