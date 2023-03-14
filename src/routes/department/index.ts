import { FastifyPluginAsync } from "fastify";

import { getDepartmentSchema, getDepartmentDetailsSchema } from "./schema";
import {
  getDepartmentController,
  getDepartmentDetails,
} from "../../controllers";

const department: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", getDepartmentSchema, async function (request: any, reply) {
    try {
      const response = await getDepartmentController();
      reply.code(response.code).send({
        data: response.data,
      });
    } catch (error) {}
  });

  // fastify.post("/upsert", getDepartmentSchema, async function (request: any, reply) {
  //   try {
  //     const response = await createDepartmentDetails(request.body);
  //     reply.code(response.code).send({
  //       data: response.data,
  //     });
  //   } catch (error) {}
  // });

  fastify.post(
    "/get_department",
    getDepartmentDetailsSchema,
    async function (request: any, reply) {
      try {
        const response = await getDepartmentDetails(request.body);
        reply.code(response.code).send({
          data: response.data,
        });
      } catch (error) {}
    }
  );
};

export default department;
