const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getProjectFromOrg = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const project = await prisma.project.findMany({
      where: { org_id: org_id },
      include: { resp: true, member: true, task_category: true },
    });
    console.log(project);
    reply.send(project);
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
    const organization = await prisma.organization.update({
      where: {
        project_id: project_id,
      },
      data: req.body,
    });
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteOrganization = async (req: any, reply: any) => {
  try {
    const { project_id } = req.params;
    const organization = await prisma.organization.delete({
      where: {
        org_id: project_id,
      },
    });
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};
