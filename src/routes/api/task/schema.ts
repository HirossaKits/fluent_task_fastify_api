const Task = {
  task_id: { type: 'string' },
  task_name: { type: 'string' },
  project_id: { type: 'string' },
  task_category_id: { type: 'string' },
  task_category: { type: 'object' },
  assigned_id: { type: 'string' },
  assigned: { type: 'object' },
  author_id: { type: 'string' },
  author: { type: 'object' },
  description: { type: 'string' },
  status: { type: 'string' },
  estimate_manhour: { type: 'string' },
  actual_manhour: { type: 'string' },
  scheduled_startdate: { type: 'string' },
  scheduled_enddate: { type: 'string' },
  actual_startdate: { type: 'string' },
  actual_enddate: { type: 'string' },
  created_at: { type: 'string' },
  update_at: { type: 'string' },
};

export const getTasks = {
  params: {
    project_id: { type: 'string' },
  },
};

export const addTask = {};

export const updateTask = {
  params: { task_id: 'string' },
};

export const deleteTask = {
  params: { task_id: { type: 'string' } },
};
