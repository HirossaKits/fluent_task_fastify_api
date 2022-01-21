import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const org = {
  org_name: 'test_organizaiton',
  org_user: [
    { email: 'test1@gmail.com', is_org_rep: true, is_org_admin: true },
  ],
};

// const user = [

//     {email: 'test1@gmail.com', org_id:'',}

// ]
