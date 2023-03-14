import type { Sequelize } from "sequelize";
import { feedback_reminder as _feedback_reminder } from "./feedback_reminder";
import type {
  feedback_reminderAttributes,
  feedback_reminderCreationAttributes,
} from "./feedback_reminder";
import { feedback_response as _feedback_response } from "./feedback_response";
import type {
  feedback_responseAttributes,
  feedback_responseCreationAttributes,
} from "./feedback_response";
import { feedback as _feedback } from "./feedback";
import type {
  feedbackAttributes,
  feedbackCreationAttributes,
} from "./feedback";
import { master_feedback_type as _master_feedback_type } from "./master_feedback_type";
import type {
  master_feedback_typeAttributes,
  master_feedback_typeCreationAttributes,
} from "./master_feedback_type";
import { master_notification_type as _master_notification_type } from "./master_notification_type";
import type {
  master_notification_typeAttributes,
  master_notification_typeCreationAttributes,
} from "./master_notification_type";
import { master_role as _master_role } from "./master_role";
import type {
  master_roleAttributes,
  master_roleCreationAttributes,
} from "./master_role";
import { master_user_status as _master_user_status } from "./master_user_status";
import type {
  master_user_statusAttributes,
  master_user_statusCreationAttributes,
} from "./master_user_status";
import { notification as _notification } from "./notification";
import type {
  notificationAttributes,
  notificationCreationAttributes,
} from "./notification";
import { user_profile as _user_profile } from "./user_profile";
import type {
  user_profileAttributes,
  user_profileCreationAttributes,
} from "./user_profile";
import { user_role_mapping as _user_role_mapping } from "./user_role_mapping";
import type {
  user_role_mappingAttributes,
  user_role_mappingCreationAttributes,
} from "./user_role_mapping";
import { user_workspace_access as _user_workspace_access } from "./user_workspace_access";
import type {
  user_workspace_accessAttributes,
  user_workspace_accessCreationAttributes,
} from "./user_workspace_access";
import { workspace_department as _workspace_department } from "./workspace_department";
import type {
  workspace_departmentAttributes,
  workspace_departmentCreationAttributes,
} from "./workspace_department";
import { workspace_designation as _workspace_designation } from "./workspace_designation";
import type {
  workspace_designationAttributes,
  workspace_designationCreationAttributes,
} from "./workspace_designation";
import { workspace_grading as _workspace_grading } from "./workspace_grading";
import type {
  workspace_gradingAttributes,
  workspace_gradingCreationAttributes,
} from "./workspace_grading";
import { workspace_signal as _workspace_signal } from "./workspace_signal";
import type {
  workspace_signalAttributes,
  workspace_signalCreationAttributes,
} from "./workspace_signal";
import { workspace as _workspace } from "./workspace";
import type {
  workspaceAttributes,
  workspaceCreationAttributes,
} from "./workspace";

export {
  _feedback_reminder as feedback_reminder,
  _feedback_response as feedback_response,
  _feedback as feedback,
  _master_feedback_type as master_feedback_type,
  _master_notification_type as master_notification_type,
  _master_role as master_role,
  _master_user_status as master_user_status,
  _notification as notification,
  _user_profile as user_profile,
  _user_role_mapping as user_role_mapping,
  _user_workspace_access as user_workspace_access,
  _workspace_department as workspace_department,
  _workspace_designation as workspace_designation,
  _workspace_grading as workspace_grading,
  _workspace_signal as workspace_signal,
  _workspace as workspace,
};

export type {
  feedback_reminderAttributes,
  feedback_reminderCreationAttributes,
  feedback_responseAttributes,
  feedback_responseCreationAttributes,
  feedbackAttributes,
  feedbackCreationAttributes,
  master_feedback_typeAttributes,
  master_feedback_typeCreationAttributes,
  master_notification_typeAttributes,
  master_notification_typeCreationAttributes,
  master_roleAttributes,
  master_roleCreationAttributes,
  master_user_statusAttributes,
  master_user_statusCreationAttributes,
  notificationAttributes,
  notificationCreationAttributes,
  user_profileAttributes,
  user_profileCreationAttributes,
  user_role_mappingAttributes,
  user_role_mappingCreationAttributes,
  user_workspace_accessAttributes,
  user_workspace_accessCreationAttributes,
  workspace_departmentAttributes,
  workspace_departmentCreationAttributes,
  workspace_designationAttributes,
  workspace_designationCreationAttributes,
  workspace_gradingAttributes,
  workspace_gradingCreationAttributes,
  workspace_signalAttributes,
  workspace_signalCreationAttributes,
  workspaceAttributes,
  workspaceCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const feedback_reminder = _feedback_reminder.initModel(sequelize);
  const feedback_response = _feedback_response.initModel(sequelize);
  const feedback = _feedback.initModel(sequelize);
  const master_feedback_type = _master_feedback_type.initModel(sequelize);
  const master_notification_type =
    _master_notification_type.initModel(sequelize);
  const master_role = _master_role.initModel(sequelize);
  const master_user_status = _master_user_status.initModel(sequelize);
  const notification = _notification.initModel(sequelize);
  const user_profile = _user_profile.initModel(sequelize);
  const user_role_mapping = _user_role_mapping.initModel(sequelize);
  const user_workspace_access = _user_workspace_access.initModel(sequelize);
  const workspace_department = _workspace_department.initModel(sequelize);
  const workspace_designation = _workspace_designation.initModel(sequelize);
  const workspace_grading = _workspace_grading.initModel(sequelize);
  const workspace_signal = _workspace_signal.initModel(sequelize);
  const workspace = _workspace.initModel(sequelize);

  notification.belongsTo(feedback_reminder, {
    as: "reminder",
    foreignKey: "reminder_id",
  });
  feedback_reminder.hasMany(notification, {
    as: "notifications",
    foreignKey: "reminder_id",
  });
  feedback_response.belongsTo(feedback, {
    as: "feedback",
    foreignKey: "feedback_id",
  });
  feedback.hasMany(feedback_response, {
    as: "feedback_responses",
    foreignKey: "feedback_id",
  });
  workspace.belongsTo(master_feedback_type, {
    as: "feedback_type_master_feedback_type",
    foreignKey: "feedback_type",
  });
  master_feedback_type.hasMany(workspace, {
    as: "workspaces",
    foreignKey: "feedback_type",
  });
  user_role_mapping.belongsTo(master_role, {
    as: "role",
    foreignKey: "role_id",
  });
  master_role.hasMany(user_role_mapping, {
    as: "user_role_mappings",
    foreignKey: "role_id",
  });
  user_profile.belongsTo(master_user_status, {
    as: "status_master_user_status",
    foreignKey: "status",
  });
  master_user_status.hasMany(user_profile, {
    as: "user_profiles",
    foreignKey: "status",
  });
  feedback_reminder.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(feedback_reminder, {
    as: "feedback_reminders",
    foreignKey: "created_by",
  });
  feedback_reminder.belongsTo(user_profile, {
    as: "from_user_profile",
    foreignKey: "from",
  });
  user_profile.hasMany(feedback_reminder, {
    as: "from_feedback_reminders",
    foreignKey: "from",
  });
  feedback_reminder.belongsTo(user_profile, {
    as: "to_user_profile",
    foreignKey: "to",
  });
  user_profile.hasMany(feedback_reminder, {
    as: "to_feedback_reminders",
    foreignKey: "to",
  });
  feedback_reminder.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(feedback_reminder, {
    as: "updated_by_feedback_reminders",
    foreignKey: "updated_by",
  });
  feedback_response.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(feedback_response, {
    as: "feedback_responses",
    foreignKey: "created_by",
  });
  feedback_response.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(feedback_response, {
    as: "updated_by_feedback_responses",
    foreignKey: "updated_by",
  });
  feedback.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(feedback, { as: "feedbacks", foreignKey: "created_by" });
  feedback.belongsTo(user_profile, {
    as: "from_user_profile",
    foreignKey: "from",
  });
  user_profile.hasMany(feedback, { as: "from_feedbacks", foreignKey: "from" });
  feedback.belongsTo(user_profile, { as: "to_user_profile", foreignKey: "to" });
  user_profile.hasMany(feedback, { as: "to_feedbacks", foreignKey: "to" });
  feedback.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(feedback, {
    as: "updated_by_feedbacks",
    foreignKey: "updated_by",
  });
  notification.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(notification, {
    as: "notifications",
    foreignKey: "created_by",
  });
  notification.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(notification, {
    as: "updated_by_notifications",
    foreignKey: "updated_by",
  });
  user_profile.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(user_profile, {
    as: "user_profiles",
    foreignKey: "created_by",
  });
  user_profile.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(user_profile, {
    as: "updated_by_user_profiles",
    foreignKey: "updated_by",
  });
  user_role_mapping.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(user_role_mapping, {
    as: "user_role_mappings",
    foreignKey: "created_by",
  });
  user_role_mapping.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(user_role_mapping, {
    as: "updated_by_user_role_mappings",
    foreignKey: "updated_by",
  });
  user_role_mapping.belongsTo(user_profile, {
    as: "user_profile",
    foreignKey: "user_profile_id",
  });
  user_profile.hasMany(user_role_mapping, {
    as: "user_profile_user_role_mappings",
    foreignKey: "user_profile_id",
  });
  user_workspace_access.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(user_workspace_access, {
    as: "user_workspace_accesses",
    foreignKey: "created_by",
  });
  user_workspace_access.belongsTo(user_profile, {
    as: "reporting_to_user_profile",
    foreignKey: "reporting_to",
  });
  user_profile.hasMany(user_workspace_access, {
    as: "reporting_to_user_workspace_accesses",
    foreignKey: "reporting_to",
  });
  user_workspace_access.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(user_workspace_access, {
    as: "updated_by_user_workspace_accesses",
    foreignKey: "updated_by",
  });
  workspace_department.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(workspace_department, {
    as: "workspace_departments",
    foreignKey: "created_by",
  });
  workspace_department.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(workspace_department, {
    as: "updated_by_workspace_departments",
    foreignKey: "updated_by",
  });
  workspace_designation.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(workspace_designation, {
    as: "workspace_designations",
    foreignKey: "created_by",
  });
  workspace_designation.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(workspace_designation, {
    as: "updated_by_workspace_designations",
    foreignKey: "updated_by",
  });
  workspace_grading.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(workspace_grading, {
    as: "workspace_gradings",
    foreignKey: "created_by",
  });
  workspace_grading.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(workspace_grading, {
    as: "updated_by_workspace_gradings",
    foreignKey: "updated_by",
  });
  workspace_signal.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(workspace_signal, {
    as: "workspace_signals",
    foreignKey: "created_by",
  });
  workspace_signal.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(workspace_signal, {
    as: "updated_by_workspace_signals",
    foreignKey: "updated_by",
  });
  workspace.belongsTo(user_profile, {
    as: "created_by_user_profile",
    foreignKey: "created_by",
  });
  user_profile.hasMany(workspace, {
    as: "created_by_workspaces",
    foreignKey: "created_by",
  });
  workspace.belongsTo(user_profile, {
    as: "updated_by_user_profile",
    foreignKey: "updated_by",
  });
  user_profile.hasMany(workspace, {
    as: "updated_by_workspaces",
    foreignKey: "updated_by",
  });
  user_workspace_access.belongsTo(workspace_department, {
    as: "department_workspace_department",
    foreignKey: "department",
  });
  workspace_department.hasMany(user_workspace_access, {
    as: "user_workspace_accesses",
    foreignKey: "department",
  });
  user_workspace_access.belongsTo(workspace_designation, {
    as: "designation_workspace_designation",
    foreignKey: "designation",
  });
  workspace_designation.hasMany(user_workspace_access, {
    as: "user_workspace_accesses",
    foreignKey: "designation",
  });
  feedback.belongsTo(workspace_grading, {
    as: "grading_workspace_grading",
    foreignKey: "grading",
  });
  workspace_grading.hasMany(feedback, {
    as: "feedbacks",
    foreignKey: "grading",
  });
  feedback.belongsTo(workspace_signal, {
    as: "signal_workspace_signal",
    foreignKey: "signal",
  });
  workspace_signal.hasMany(feedback, { as: "feedbacks", foreignKey: "signal" });
  feedback.belongsTo(workspace, {
    as: "workspace",
    foreignKey: "workspace_id",
  });
  workspace.hasMany(feedback, { as: "feedbacks", foreignKey: "workspace_id" });
  user_profile.belongsTo(workspace, {
    as: "workspace",
    foreignKey: "workspace_id",
  });
  workspace.hasMany(user_profile, {
    as: "user_profiles",
    foreignKey: "workspace_id",
  });
  user_role_mapping.belongsTo(workspace, {
    as: "workspace",
    foreignKey: "workspace_id",
  });
  workspace.hasMany(user_role_mapping, {
    as: "user_role_mappings",
    foreignKey: "workspace_id",
  });
  user_workspace_access.belongsTo(workspace, {
    as: "workspace",
    foreignKey: "workspace_id",
  });
  workspace.hasMany(user_workspace_access, {
    as: "user_workspace_accesses",
    foreignKey: "workspace_id",
  });
  workspace_department.belongsTo(workspace, {
    as: "workspace",
    foreignKey: "workspace_id",
  });
  workspace.hasMany(workspace_department, {
    as: "workspace_departments",
    foreignKey: "workspace_id",
  });
  workspace_designation.belongsTo(workspace, {
    as: "workspace",
    foreignKey: "workspace_id",
  });
  workspace.hasMany(workspace_designation, {
    as: "workspace_designations",
    foreignKey: "workspace_id",
  });
  workspace_grading.belongsTo(workspace, {
    as: "workspace",
    foreignKey: "workspace_id",
  });
  workspace.hasMany(workspace_grading, {
    as: "workspace_gradings",
    foreignKey: "workspace_id",
  });

  return {
    feedback_reminder: feedback_reminder,
    feedback_response: feedback_response,
    feedback: feedback,
    master_feedback_type: master_feedback_type,
    master_notification_type: master_notification_type,
    master_role: master_role,
    master_user_status: master_user_status,
    notification: notification,
    user_profile: user_profile,
    user_role_mapping: user_role_mapping,
    user_workspace_access: user_workspace_access,
    workspace_department: workspace_department,
    workspace_designation: workspace_designation,
    workspace_grading: workspace_grading,
    workspace_signal: workspace_signal,
    workspace: workspace,
  };
}
