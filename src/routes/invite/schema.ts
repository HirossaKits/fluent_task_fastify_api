const Invite = {
  invite_id: { type: 'string' },
  org_name: { type: 'string' },
};

const Invites = {
  type: 'array',
  items: { type: 'object', properties: Invite },
};

export const getInvite = {
  params: {
    user_id: { type: 'string' },
  },
  response: {
    200: Invites,
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
    properties: {
      accept: { type: 'boolean' },
      reject: { type: 'boolean' },
    },
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
