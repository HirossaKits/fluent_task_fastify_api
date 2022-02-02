const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const getOrganization = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const organization = await prisma.organization.findUnique({
      where: { org_id: org_id },
      // include: { User: true },
    });
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addOrganization = async (req: any, reply: any) => {
  try {
    const organization = await prisma.organization.create({
      data: req.body,
    });
    reply.status(201).send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateOrganization = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const organization = await prisma.organization.update({
      where: {
        org_id: org_id,
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
    const { org_id } = req.params;
    const organization = await prisma.organization.delete({
      where: {
        org_id: org_id,
      },
    });
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};
