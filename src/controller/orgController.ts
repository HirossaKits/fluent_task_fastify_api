const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const getOrganization = async (request: any, reply: any) => {
  try {
    const { org_id } = request.params;
    const organization = await prisma.organization.findUnique({
      where: { org_id: org_id },
      // include: { User: true },
    });
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addOrganization = async (request: any, reply: any) => {
  try {
    const organization = await prisma.organization.create({
      data: request.body,
    });
    reply.status(201).send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateOrganization = async (request: any, reply: any) => {
  try {
    const { org_id } = request.params;
    const organization = await prisma.organization.update({
      where: {
        org_id: org_id,
      },
      data: request.body,
    });
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteOrganization = async (request: any, reply: any) => {
  try {
    const { org_id } = request.params;
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
