interface GetDepartment {
  data: string;
  code: number;
  status: object;
  message?: string;
}

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
