const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getProject = async (req: any, reply: any) => {
  try {
    const { user_id } = await req.jwtVerify();
    const { org_id } = req.params;

    const org = await prisma.organization.findUnique({
      select: { org_admin: { select: { user_id: true } } },
      where: { org_id: org_id },
    });

    const projects = org.org_admin?.find((user) => user.user_id === user_id)
      ? await prisma.project.findMany({
          where: { org_id: org_id },
          include: { resp: true, member: true },
          orderBy: {
            created_at: 'asc',
          },
        })
      : await prisma.project.findMany({
          where: {
            org_id: org_id,
            OR: [
              {
                resp: { some: { user_id: user_id } },
              },
              {
                member: { some: { user_id: user_id } },
              },
            ],
          },
          include: { resp: true, member: true },
          orderBy: {
            created_at: 'asc',
          },
        });

    const shapedProjects = projects?.map((proj) => {
      proj.resp_id = proj.resp?.map((user) => user.user_id);
      proj.member_id = proj.member?.map((user) => user.user_id);
      return proj;
    });
    reply.send(shapedProjects);
    reply.send({ test: 'test' });
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addProject = async (req: any, reply: any) => {
  try {
    const { user_id } = await req.jwtVerify();
    const org_id = req.body.org_id;

    const project = await prisma.project.create({
      data: {
        project_name: req.body.project_name,
        org_id: req.body.org_id,
        description: req.body.description,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
      },
    });

    await prisma.project.update({
      where: { project_id: project.project_id },
      data: {
        resp: {
          connect: req.body.resp_id.map((user_id) => ({ user_id: user_id })),
        },
        member: {
          connect: req.body.member_id.map((user_id) => ({ user_id: user_id })),
        },
      },
    });

    const org = await prisma.organization.findUnique({
      select: { org_admin: { select: { user_id: true } } },
      where: { org_id: org_id },
    });

    const projects = org.org_admin?.find((user) => user.user_id === user_id)
      ? await prisma.project.findMany({
          where: { org_id: org_id },
          include: { resp: true, member: true },
          orderBy: {
            created_at: 'asc',
          },
        })
      : await prisma.project.findMany({
          where: {
            org_id: org_id,
            OR: [
              {
                resp: { some: { user_id: user_id } },
              },
              {
                member: { some: { user_id: user_id } },
              },
            ],
          },
          include: { resp: true, member: true },
          orderBy: {
            created_at: 'asc',
          },
        });

    const shapedProjects = projects?.map((proj) => {
      proj.resp_id = proj.resp?.map((user) => user.user_id);
      proj.member_id = proj.member?.map((user) => user.user_id);
      return proj;
    });
    reply.send(shapedProjects);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateProject = async (req: any, reply: any) => {
  try {
    const { user_id } = await req.jwtVerify();
    const { project_id } = req.params;
    const project = await prisma.project.update({
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

    const org_id = project.org_id;

    const org = await prisma.organization.findUnique({
      select: { org_admin: { select: { user_id: true } } },
      where: { org_id: org_id },
    });

    const projects = org.org_admin?.find((user) => user.user_id === user_id)
      ? await prisma.project.findMany({
          where: { org_id: org_id },
          include: { resp: true, member: true },
          orderBy: {
            created_at: 'asc',
          },
        })
      : await prisma.project.findMany({
          where: {
            org_id: org_id,
            OR: [
              {
                resp: { some: { user_id: user_id } },
              },
              {
                member: { some: { user_id: user_id } },
              },
            ],
          },
          include: { resp: true, member: true },
          orderBy: {
            created_at: 'asc',
          },
        });

    const shapedProjects = projects?.map((proj) => {
      proj.resp_id = proj.resp?.map((user) => user.user_id);
      proj.member_id = proj.member?.map((user) => user.user_id);
      return proj;
    });

    reply.send(shapedProjects);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteProject = async (req: any, reply: any) => {
  try {
    const { user_id } = await req.jwtVerify();
    const { project_id } = req.params;
    const project = await prisma.project.delete({
      where: {
        project_id: project_id,
      },
    });

    const org_id = project.org_id;

    const org = await prisma.organization.findUnique({
      select: { org_admin: { select: { user_id: true } } },
      where: { org_id: org_id },
    });

    const projects = org.org_admin?.find((user) => user.user_id === user_id)
      ? await prisma.project.findMany({
          where: { org_id: org_id },
          include: { resp: true, member: true },
          orderBy: {
            created_at: 'asc',
          },
        })
      : await prisma.project.findMany({
          where: {
            org_id: org_id,
            OR: [
              {
                resp: { some: { user_id: user_id } },
              },
              {
                member: { some: { user_id: user_id } },
              },
            ],
          },
          include: { resp: true, member: true },
          orderBy: {
            created_at: 'asc',
          },
        });

    const shapedProjects = projects?.map((proj) => {
      proj.resp_id = proj.resp?.map((user) => user.user_id);
      proj.member_id = proj.member?.map((user) => user.user_id);
      return proj;
    });

    reply.send(shapedProjects);
  } catch (error) {
    reply.status(500).send(error);
  }
};
