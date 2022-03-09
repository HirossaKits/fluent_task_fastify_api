const TaskCategory = {
  task_category_id: { type: 'string' },
  task_category_name: { type: 'string' },
  project_id: { type: 'string' },
};

export const getTaskCategory = {
  params: {
    project_id: { type: 'string' },
  },
  response: {
    200: { type: 'array', items: TaskCategory },
  },
};

export const addTaskCategory = {
  params: {
    project_id: { type: 'string' },
  },
  body: {
    type: 'object',
    properties: {
      task_category_name: { type: 'string' },
    },
  },
  response: {
    200: { type: 'array', items: TaskCategory },
  },
};

export const updateTaskCategory = {
  params: {
    task_category_id: { type: 'string' },
  },
  body: {
    type: 'object',
    properties: {
      task_category_name: { type: 'string' },
    },
  },
  response: {
    200: TaskCategory,
  },
};

export const deleteTaskCategory = {
  params: {
    task_category_id: { type: 'string' },
  },
  response: {
    200: TaskCategory,
  },
};
