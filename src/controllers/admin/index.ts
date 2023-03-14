import { user_profile } from "../../models/user_profile";
import { user_role_mapping } from "../../models/user_role_mapping";
import { user_workspace_access } from "../../models/user_workspace_access";
import { workspace } from "../../models/workspace";

interface UpsertAdmin {
  data?: object;
  code: number;
  status: object;
  message?: string;
}

export const UpsertAdminController = () => {
  return new Promise<UpsertAdmin>(async (resolve, reject) => {
    try {
      let userProfile = await user_profile.create({
        name: "Manojkumar",
        status: 1,
        user_id: "poQSexgFw3TeUKSb1YPcVkHvIEk2",
      });
      userProfile = userProfile.toJSON();

      let workspaceResponse = await workspace.create({
        name: "crayond",
        feedback_type: 1,
        created_by: userProfile.id,
        updated_by: userProfile.id,
      });
      workspaceResponse = workspaceResponse.toJSON();

      let workspaceAccess = await user_workspace_access.create({
        workspace_id: workspaceResponse.id,
        created_by: userProfile.id,
        updated_by: userProfile.id,
      });
      workspaceAccess = workspaceAccess.toJSON();

      let userRoleMapping = await user_role_mapping.create({
        role_id: 1,
        user_profile_id: userProfile.id,
        workspace_id: workspaceResponse.id,
      });
      userRoleMapping = userRoleMapping.toJSON();

      resolve({
        data: userRoleMapping,
        code: globalThis.status_codes?.code,
        status: globalThis.status_codes?.success,
      });
    } catch (error: any) {
      console.log(error);
      reject({
        message: error?.message,
        code: globalThis.status_codes?.code,
        status: globalThis.status_codes?.success,
      });
    }
  });
};
