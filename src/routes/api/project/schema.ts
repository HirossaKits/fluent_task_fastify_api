const User = {
  user_id: { type: 'string' },
  is_premium: { type: 'boolean' },
  first_name: { type: 'string' },
  last_name: { type: 'string' },
  avatar_img: { type: 'string' },
  comment: { type: 'string' },
};

const TaskCategory = {
  task_category_id: { type: 'string' },
  task_category_name: { type: 'string' },
};

const Project = {
  project_id: { type: 'string' },
  project_name: { type: 'string' },
  description: { type: 'string' },
  startdate: { type: 'string' },
  enddate: { type: 'string' },
  resp: { type: 'array', items: { type: 'object', properties: User } },
  member: { type: 'array', items: { type: 'object', properties: User } },
  task_category: {
    type: 'array',
    items: { type: 'object', properties: TaskCategory },
  },
};

const Projects = {
  type: 'array',
  items: { type: 'object', properties: Project },
};

export const getProjectsFromOrg = {
  params: {
    org_id: { type: 'string' },
  },
  response: {
    200: Projects,
  },
};

export const addProject = {
  response: {
    200: Projects,
  },
};

export const updateProject = {
  params: {
    project_id: { type: 'string' },
  },
  response: {
    200: Projects,
  },
};
