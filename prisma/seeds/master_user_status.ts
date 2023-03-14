import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createMasterUserStatus() {
  await prisma.master_user_statuses.createMany({
    data: [
      {
        id: 1,
        label: "active",
      },
      {
        id: 2,
        label: "invite",
      },
      {
        id: 3,
        label: "inactive",
      },
    ],
  });
}

export default createMasterUserStatus;
