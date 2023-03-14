import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createMasterNotificationTypes() {
  await prisma.master_notification_type.createMany({
    data: [
      {
        id: 1,
        label: "follow-up",
      },
      {
        id: 2,
        label: "new feedback",
      },
    ],
  });
}

export default createMasterNotificationTypes;
