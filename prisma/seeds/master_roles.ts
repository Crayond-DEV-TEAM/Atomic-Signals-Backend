import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createMasterRoles() {
  await prisma.master_roles.createMany({
    data: [
      {
        id: 1,
        label: "admin",
      },
      {
        id: 2,
        label: "manager",
      },
      {
        id: 3,
        label: "employee",
      },
    ],
  });
}

export default createMasterRoles;
