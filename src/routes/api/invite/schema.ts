const Invite = {
  invite_org_id: { type: 'string' },
  invited_user_id: { type: 'string' },
  validated: { type: 'boolean' },
};

export const getInvite = {
  params: {
    user_id: { type: 'string' },
  },
  response: {
    200: { type: 'array', items: Invite },
  },
};

export const addInvite = {
  body: {
    type: 'object',
    properties: Invite,
  },
  response: {
    200: Invite,
  },
};

export const updateInvite = {
  params: {
    invite_id: { type: 'string' },
  },
  body: {
    type: 'object',
    properties: { validated: { type: 'boolean' } },
  },
  response: {
    200: Invite,
  },
};

export const deleteInvite = {
  params: {
    invite_id: { type: 'string' },
  },
  response: {
    200: Invite,
  },
};
