import org from '../routes/api/user';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const getOrganization = async (request: any, reply: any) => {
  try {
    const { org_id } = request.params;
    const organization = await prisma.organization.findUnique({
      where: { org_id: org_id },
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const getPrivateOrganization = async (request: any, reply: any) => {
  try {
    const { owner } = request.params;
    const organization = await prisma.organization.findFirst({
      where: { org_owner_id: owner, is_private: true },
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const getPublicOrganization = async (request: any, reply: any) => {
  try {
    const { org_id } = request.params;
    const organization = await prisma.organization.findFirst({
      where: { org_id: org_id },
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
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
