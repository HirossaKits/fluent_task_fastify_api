const Settings = {
  tooltip: { type: 'boolean' },
  private_mode: { type: 'boolean' },
  selected_org_id: { type: 'string' },
};

export const getSettings = {
  params: {
    user_id: { type: 'string' },
  },
  response: {
    200: Settings,
  },
};

export const updateSettings = {
  params: {
    user_id: { type: 'string' },
  },
  body: {
    type: 'object',
    properties: {
      dark_mode: { type: 'boolean' },
      tooltip: { type: 'boolean' },
      private_mode: { type: 'boolean' },
    },
  },
  response: {
    200: Settings,
  },
};
