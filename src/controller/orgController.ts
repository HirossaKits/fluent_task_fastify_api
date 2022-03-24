const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getOrganization = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const organization = await prisma.organization.findUnique({
      where: { org_id: org_id },
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin?.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const getPrivateOrganization = async (req: any, reply: any) => {
  try {
    const { owner } = req.params;
    const organization = await prisma.organization.findFirst({
      where: { org_owner_id: owner, is_private: true },
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin?.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const getPublicOrganization = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const organization = await prisma.organization.findFirst({
      where: { org_id: org_id },
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin?.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addOrganization = async (req: any, reply: any) => {
  try {
    const organization = await prisma.organization.create({
      data: req.body,
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin?.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
    reply.status(201).send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateOrganization = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const organization = await prisma.organization.update({
      where: { org_id: org_id },
      data: req.body,
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin?.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const includeOrganizationAdmin = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const organization = await prisma.organization.update({
      where: { org_id: org_id },
      data: { org_admin: { connect: [req.body] } },
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin?.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
    console.log(organization);
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const excludeOrganizationAdmin = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const organization = await prisma.organization.update({
      where: { org_id: org_id },
      data: { org_admin: { disconnect: [req.body] } },
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin?.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const excludeOrganizationUser = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const organization = await prisma.organization.update({
      where: { org_id: org_id },
      data: { org_user: { disconnect: [req.body] } },
      include: { org_admin: true, org_user: true },
    });
    organization.org_admin_id = organization.org_admin?.map(
      (obj) => obj.user_id
    );
    delete organization.org_admin;
    reply.send(organization);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteOrganization = async (req: any, reply: any) => {
  try {
    const { org_id } = req.params;
    const organization = await prisma.organization.delete({
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
