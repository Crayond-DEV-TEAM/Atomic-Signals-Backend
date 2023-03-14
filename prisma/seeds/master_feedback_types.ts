import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createMasterFeedbackTypes() {
  await prisma.master_feedback_types.createMany({
    data: [
      {
        id: 1,
        label: "reporting to",
      },
      {
        id: 2,
        label: "peer to peer",
      },
      {
        id: 3,
        label: "360",
      },
    ],
  });
}

export default createMasterFeedbackTypes;
