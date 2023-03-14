import { PrismaClient } from "@prisma/client";
import createMasterFeedbackTypes from "./seeds/master_feedback_types";
import createMasterNotificationTypes from "./seeds/master_notification_types";
import createMasterRoles from "./seeds/master_roles";
import createMasterUserStatus from "./seeds/master_user_status";

const prisma = new PrismaClient();

async function main() {
  await createMasterFeedbackTypes();
  await createMasterNotificationTypes();
  await createMasterRoles();
  await createMasterUserStatus();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
