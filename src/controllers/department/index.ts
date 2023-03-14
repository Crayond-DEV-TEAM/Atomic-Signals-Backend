import { workspace_department } from "../../models/workspace_department";

const { Op } = require("sequelize");

interface GetDepartment {
  data: any;
  code: number;
  status: object;
  message?: string;
}
interface getDepartmentDetails {
  workspace_id: string;
  offset?: number;
  limit?: number;
  search?: string;
}

// interface createDepartment {
//   workspace_id: string;
//   label: string;
//   description: string;
//   is_active: boolean;
// }

export const getDepartmentController = () => {
  return new Promise<GetDepartment>(async (resolve, reject) => {
    try {
      resolve({
        data: "Good To GO 🥳!",
        code: globalThis.status_codes?.success?.status,
        status: globalThis.status_codes?.success,
      });
    } catch (error: any) {
      /** Need to handle the error middleware */
      reject({
        message: error?.message,
        code: globalThis.status_codes.error.status,
        status: globalThis.status_codes.error,
      });
    }
  });
};

/**
 * This function get the data in workspace_department
 * @param {Object} body - body of request
 * */

export const getDepartmentDetails = (body: getDepartmentDetails) => {
  return new Promise<GetDepartment>(async (resolve, reject) => {
    try {
      const { workspace_id, search, offset, limit } = body;
      const response: any = await workspace_department.findAndCountAll({
        where: {
          workspace_id: workspace_id,
          [Op.or]: [
            {
              label: { [Op.like]: "%" + search + "%" },
            },
          ],
        },
        offset,
        limit,
        raw: true,
      });
      console.log(response);

      resolve({
        data: {
          dep: response,
        },
        code: globalThis.status_codes?.success?.status,
        status: globalThis.status_codes?.success,
      });
    } catch (error: any) {
      reject({
        message: error?.message,
        code: globalThis.status_codes.error.status,
        status: globalThis.status_codes.error,
      });
    }
  });
};

/**
 * This function upsert the data in locations master
 * @param {Object} body - body of request
 * */

// export const createDepartmentDetails = (body: createDepartment) => {
//   return new Promise<GetDepartment>(async (resolve, reject) => {
//     try {
//       let {workspace_id, label, description, is_active} = body
//       const response = await workspace_department.upsert({workspace_id,label,description,is_active})
//       resolve({
//         data: response,
//         code: globalThis.status_codes?.success?.status,
//         status: globalThis.status_codes?.success,
//       })
//     } catch (error: any) {
//       reject({
//         message: error?.message,
//         code: globalThis.status_codes.error.status,
//         status: globalThis.status_codes.error,
//       });
//     }
//   })
// }
