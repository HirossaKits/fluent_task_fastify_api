import org from '../routes/api/org';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getInvite = async (req: any, reply: any) => {
  const { user_id } = req.params;
  try {
    const invites = await prisma.invite.findMany({
      where: { user_id: user_id, accepted: false, rejected: false },
      include: { org: true },
    });
    const shapedInvites = invites.map((invite) => ({
      invite_id: invite.invite_id,
      org_name: invite.org.org_name,
    }));

    reply.send(shapedInvites);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const addInvite = async (req: any, reply: any) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    const data = user ? { ...req.body, user_id: user.user_id } : req.body;
    const invite = await prisma.invite.create({
      data: data,
    });
    reply.send(invite);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateInvite = async (req: any, reply: any) => {
  try {
    const { invite_id } = req.params;

    const invite = await prisma.invite.update({
      where: { invite_id: invite_id },
      data: req.body,
    });

    if (invite.accepted) {
      await prisma.organization.update({
        where: { org_id: invite.org_id },
        data: { org_user: { connect: [{ user_id: invite.user_id }] } },
      });
    }

    const invites = await prisma.invite.findMany({
      where: { user_id: invite.user_id, accepted: false, rejected: false },
      include: { org: true },
    });

    const shapedInvites = invites.map((invite) => ({
      invite_id: invite.invite_id,
      org_name: invite.org.org_name,
    }));

    reply.send(invites);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteInvite = async (req: any, reply: any) => {
  try {
    const { invite_id } = req.params;
    const invite = await prisma.invite.delete({
      where: { invite_id: invite_id },
    });
    reply.send(invite);
  } catch (error) {
    reply.status(500).send(error);
  }
};
