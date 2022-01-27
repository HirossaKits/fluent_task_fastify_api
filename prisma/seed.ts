import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// const org = {
//   org_name: 'test_organizaiton',
//   org_user: [
//     { email: 'test1@gmail.com',
//     is_org_rep: true,
//     is_org_admin: true,
//     assinged_task: [{
//         task_name: 'sample_task',
//     }]},
//   ],
// };

async function main() {
  const org = await prisma.organization.create({
    data: {
      org_name: 'OrgB',
      org_user: null,
      project: null,
    },
  });
}

//   const alice = await prisma.user.create({
//     where: { email: 'alice@prisma.io' },
//     update: {},
//     create: {
//       email: 'alice@prisma.io',
//       name: 'Alice',
//       posts: {
//         create: {
//           title: 'Check out Prisma with Next.js',
//           content: 'https://www.prisma.io/nextjs',
//           published: true,
//         },
//       },
//     },
//   });
// }
