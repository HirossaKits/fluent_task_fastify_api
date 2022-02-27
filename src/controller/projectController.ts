const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getProjectFromOrg = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const projects = await prisma.project.findMany({
      where: { org_id: org_id },
      include: { resp: true, member: true, task_category: true },
    });
    reply.send(projects);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addProject = async (req: any, reply: any) => {
  try {
    const project = await prisma.project.create({
      data: req.body,
    });
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateProject = async (req: any, reply: any) => {
  try {
    const { project_id } = req.params;
    await prisma.project.update({
      where: {
        project_id: project_id,
      },
      data: {
        project_name: req.body.project_name,
        description: req.body.description,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        resp: {
          set: req.body.resp_id.map((user_id) => ({ user_id: user_id })),
        },
        member: {
          set: req.body.member_id.map((user_id) => ({ user_id: user_id })),
        },
      },
    });
    const projects = await prisma.project.findMany({
      where: { org_id: req.body.org_id },
      include: { resp: true, member: true, task_category: true },
    });
    reply.send(projects);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteOrganization = async (req: any, reply: any) => {
  try {
    const { project_id } = req.params;
    const project = await prisma.organization.delete({
      where: {
        org_id: project_id,
      },
    });
    reply.send(project);
  } catch (error) {
    reply.status(500).send(error);
  }
};
