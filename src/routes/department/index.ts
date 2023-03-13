import { FastifyPluginAsync } from "fastify";

import { getDepartmentSchema } from "./schema";
import { getDepartmentController } from "../../controllers";

const department: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", getDepartmentSchema, async function (request: any, reply) {
    try {
      const response = await getDepartmentController();
      reply.code(response.code).send({
        data: response.data,
      });
    } catch (error) {}
  });
};

export default department;
