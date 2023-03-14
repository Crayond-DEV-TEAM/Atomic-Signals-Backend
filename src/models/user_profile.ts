import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type {
  feedback_reminder,
  feedback_reminderId,
} from "./feedback_reminder";
import type {
  feedback_response,
  feedback_responseId,
} from "./feedback_response";
import type { feedback, feedbackId } from "./feedback";
import type {
  master_user_status,
  master_user_statusId,
} from "./master_user_status";
import type { notification, notificationId } from "./notification";
import type {
  user_role_mapping,
  user_role_mappingId,
} from "./user_role_mapping";
import type {
  user_workspace_access,
  user_workspace_accessId,
} from "./user_workspace_access";
import type {
  workspace_department,
  workspace_departmentId,
} from "./workspace_department";
import type {
  workspace_designation,
  workspace_designationId,
} from "./workspace_designation";
import type {
  workspace_grading,
  workspace_gradingId,
} from "./workspace_grading";
import type { workspace_signal, workspace_signalId } from "./workspace_signal";
import type { workspace, workspaceId } from "./workspace";

export interface user_profileAttributes {
  id: string;
  workspace_id?: string;
  user_id?: string;
  profile_pic?: string;
  name?: string;
  status?: number;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type user_profilePk = "id";
export type user_profileId = user_profile[user_profilePk];
export type user_profileOptionalAttributes =
  | "id"
  | "workspace_id"
  | "user_id"
  | "profile_pic"
  | "name"
  | "status"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type user_profileCreationAttributes = Optional<
  user_profileAttributes,
  user_profileOptionalAttributes
>;

export class user_profile
  extends Model<user_profileAttributes, user_profileCreationAttributes>
  implements user_profileAttributes
{
  id!: string;
  workspace_id?: string;
  user_id?: string;
  profile_pic?: string;
  name?: string;
  status?: number;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // user_profile belongsTo master_user_status via status
  status_master_user_status!: master_user_status;
  getStatus_master_user_status!: Sequelize.BelongsToGetAssociationMixin<master_user_status>;
  setStatus_master_user_status!: Sequelize.BelongsToSetAssociationMixin<
    master_user_status,
    master_user_statusId
  >;
  createStatus_master_user_status!: Sequelize.BelongsToCreateAssociationMixin<master_user_status>;
  // user_profile hasMany feedback_reminder via created_by
  feedback_reminders!: feedback_reminder[];
  getFeedback_reminders!: Sequelize.HasManyGetAssociationsMixin<feedback_reminder>;
  setFeedback_reminders!: Sequelize.HasManySetAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  addFeedback_reminder!: Sequelize.HasManyAddAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  addFeedback_reminders!: Sequelize.HasManyAddAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  createFeedback_reminder!: Sequelize.HasManyCreateAssociationMixin<feedback_reminder>;
  removeFeedback_reminder!: Sequelize.HasManyRemoveAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  removeFeedback_reminders!: Sequelize.HasManyRemoveAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  hasFeedback_reminder!: Sequelize.HasManyHasAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  hasFeedback_reminders!: Sequelize.HasManyHasAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  countFeedback_reminders!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany feedback_reminder via from
  from_feedback_reminders!: feedback_reminder[];
  getFrom_feedback_reminders!: Sequelize.HasManyGetAssociationsMixin<feedback_reminder>;
  setFrom_feedback_reminders!: Sequelize.HasManySetAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  addFrom_feedback_reminder!: Sequelize.HasManyAddAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  addFrom_feedback_reminders!: Sequelize.HasManyAddAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  createFrom_feedback_reminder!: Sequelize.HasManyCreateAssociationMixin<feedback_reminder>;
  removeFrom_feedback_reminder!: Sequelize.HasManyRemoveAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  removeFrom_feedback_reminders!: Sequelize.HasManyRemoveAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  hasFrom_feedback_reminder!: Sequelize.HasManyHasAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  hasFrom_feedback_reminders!: Sequelize.HasManyHasAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  countFrom_feedback_reminders!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany feedback_reminder via to
  to_feedback_reminders!: feedback_reminder[];
  getTo_feedback_reminders!: Sequelize.HasManyGetAssociationsMixin<feedback_reminder>;
  setTo_feedback_reminders!: Sequelize.HasManySetAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  addTo_feedback_reminder!: Sequelize.HasManyAddAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  addTo_feedback_reminders!: Sequelize.HasManyAddAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  createTo_feedback_reminder!: Sequelize.HasManyCreateAssociationMixin<feedback_reminder>;
  removeTo_feedback_reminder!: Sequelize.HasManyRemoveAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  removeTo_feedback_reminders!: Sequelize.HasManyRemoveAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  hasTo_feedback_reminder!: Sequelize.HasManyHasAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  hasTo_feedback_reminders!: Sequelize.HasManyHasAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  countTo_feedback_reminders!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany feedback_reminder via updated_by
  updated_by_feedback_reminders!: feedback_reminder[];
  getUpdated_by_feedback_reminders!: Sequelize.HasManyGetAssociationsMixin<feedback_reminder>;
  setUpdated_by_feedback_reminders!: Sequelize.HasManySetAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  addUpdated_by_feedback_reminder!: Sequelize.HasManyAddAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  addUpdated_by_feedback_reminders!: Sequelize.HasManyAddAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  createUpdated_by_feedback_reminder!: Sequelize.HasManyCreateAssociationMixin<feedback_reminder>;
  removeUpdated_by_feedback_reminder!: Sequelize.HasManyRemoveAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  removeUpdated_by_feedback_reminders!: Sequelize.HasManyRemoveAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  hasUpdated_by_feedback_reminder!: Sequelize.HasManyHasAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  hasUpdated_by_feedback_reminders!: Sequelize.HasManyHasAssociationsMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  countUpdated_by_feedback_reminders!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany feedback_response via created_by
  feedback_responses!: feedback_response[];
  getFeedback_responses!: Sequelize.HasManyGetAssociationsMixin<feedback_response>;
  setFeedback_responses!: Sequelize.HasManySetAssociationsMixin<
    feedback_response,
    feedback_responseId
  >;
  addFeedback_response!: Sequelize.HasManyAddAssociationMixin<
    feedback_response,
    feedback_responseId
  >;
  addFeedback_responses!: Sequelize.HasManyAddAssociationsMixin<
    feedback_response,
    feedback_responseId
  >;
  createFeedback_response!: Sequelize.HasManyCreateAssociationMixin<feedback_response>;
  removeFeedback_response!: Sequelize.HasManyRemoveAssociationMixin<
    feedback_response,
    feedback_responseId
  >;
  removeFeedback_responses!: Sequelize.HasManyRemoveAssociationsMixin<
    feedback_response,
    feedback_responseId
  >;
  hasFeedback_response!: Sequelize.HasManyHasAssociationMixin<
    feedback_response,
    feedback_responseId
  >;
  hasFeedback_responses!: Sequelize.HasManyHasAssociationsMixin<
    feedback_response,
    feedback_responseId
  >;
  countFeedback_responses!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany feedback_response via updated_by
  updated_by_feedback_responses!: feedback_response[];
  getUpdated_by_feedback_responses!: Sequelize.HasManyGetAssociationsMixin<feedback_response>;
  setUpdated_by_feedback_responses!: Sequelize.HasManySetAssociationsMixin<
    feedback_response,
    feedback_responseId
  >;
  addUpdated_by_feedback_response!: Sequelize.HasManyAddAssociationMixin<
    feedback_response,
    feedback_responseId
  >;
  addUpdated_by_feedback_responses!: Sequelize.HasManyAddAssociationsMixin<
    feedback_response,
    feedback_responseId
  >;
  createUpdated_by_feedback_response!: Sequelize.HasManyCreateAssociationMixin<feedback_response>;
  removeUpdated_by_feedback_response!: Sequelize.HasManyRemoveAssociationMixin<
    feedback_response,
    feedback_responseId
  >;
  removeUpdated_by_feedback_responses!: Sequelize.HasManyRemoveAssociationsMixin<
    feedback_response,
    feedback_responseId
  >;
  hasUpdated_by_feedback_response!: Sequelize.HasManyHasAssociationMixin<
    feedback_response,
    feedback_responseId
  >;
  hasUpdated_by_feedback_responses!: Sequelize.HasManyHasAssociationsMixin<
    feedback_response,
    feedback_responseId
  >;
  countUpdated_by_feedback_responses!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany feedback via created_by
  feedbacks!: feedback[];
  getFeedbacks!: Sequelize.HasManyGetAssociationsMixin<feedback>;
  setFeedbacks!: Sequelize.HasManySetAssociationsMixin<feedback, feedbackId>;
  addFeedback!: Sequelize.HasManyAddAssociationMixin<feedback, feedbackId>;
  addFeedbacks!: Sequelize.HasManyAddAssociationsMixin<feedback, feedbackId>;
  createFeedback!: Sequelize.HasManyCreateAssociationMixin<feedback>;
  removeFeedback!: Sequelize.HasManyRemoveAssociationMixin<
    feedback,
    feedbackId
  >;
  removeFeedbacks!: Sequelize.HasManyRemoveAssociationsMixin<
    feedback,
    feedbackId
  >;
  hasFeedback!: Sequelize.HasManyHasAssociationMixin<feedback, feedbackId>;
  hasFeedbacks!: Sequelize.HasManyHasAssociationsMixin<feedback, feedbackId>;
  countFeedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany feedback via from
  from_feedbacks!: feedback[];
  getFrom_feedbacks!: Sequelize.HasManyGetAssociationsMixin<feedback>;
  setFrom_feedbacks!: Sequelize.HasManySetAssociationsMixin<
    feedback,
    feedbackId
  >;
  addFrom_feedback!: Sequelize.HasManyAddAssociationMixin<feedback, feedbackId>;
  addFrom_feedbacks!: Sequelize.HasManyAddAssociationsMixin<
    feedback,
    feedbackId
  >;
  createFrom_feedback!: Sequelize.HasManyCreateAssociationMixin<feedback>;
  removeFrom_feedback!: Sequelize.HasManyRemoveAssociationMixin<
    feedback,
    feedbackId
  >;
  removeFrom_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<
    feedback,
    feedbackId
  >;
  hasFrom_feedback!: Sequelize.HasManyHasAssociationMixin<feedback, feedbackId>;
  hasFrom_feedbacks!: Sequelize.HasManyHasAssociationsMixin<
    feedback,
    feedbackId
  >;
  countFrom_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany feedback via to
  to_feedbacks!: feedback[];
  getTo_feedbacks!: Sequelize.HasManyGetAssociationsMixin<feedback>;
  setTo_feedbacks!: Sequelize.HasManySetAssociationsMixin<feedback, feedbackId>;
  addTo_feedback!: Sequelize.HasManyAddAssociationMixin<feedback, feedbackId>;
  addTo_feedbacks!: Sequelize.HasManyAddAssociationsMixin<feedback, feedbackId>;
  createTo_feedback!: Sequelize.HasManyCreateAssociationMixin<feedback>;
  removeTo_feedback!: Sequelize.HasManyRemoveAssociationMixin<
    feedback,
    feedbackId
  >;
  removeTo_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<
    feedback,
    feedbackId
  >;
  hasTo_feedback!: Sequelize.HasManyHasAssociationMixin<feedback, feedbackId>;
  hasTo_feedbacks!: Sequelize.HasManyHasAssociationsMixin<feedback, feedbackId>;
  countTo_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany feedback via updated_by
  updated_by_feedbacks!: feedback[];
  getUpdated_by_feedbacks!: Sequelize.HasManyGetAssociationsMixin<feedback>;
  setUpdated_by_feedbacks!: Sequelize.HasManySetAssociationsMixin<
    feedback,
    feedbackId
  >;
  addUpdated_by_feedback!: Sequelize.HasManyAddAssociationMixin<
    feedback,
    feedbackId
  >;
  addUpdated_by_feedbacks!: Sequelize.HasManyAddAssociationsMixin<
    feedback,
    feedbackId
  >;
  createUpdated_by_feedback!: Sequelize.HasManyCreateAssociationMixin<feedback>;
  removeUpdated_by_feedback!: Sequelize.HasManyRemoveAssociationMixin<
    feedback,
    feedbackId
  >;
  removeUpdated_by_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<
    feedback,
    feedbackId
  >;
  hasUpdated_by_feedback!: Sequelize.HasManyHasAssociationMixin<
    feedback,
    feedbackId
  >;
  hasUpdated_by_feedbacks!: Sequelize.HasManyHasAssociationsMixin<
    feedback,
    feedbackId
  >;
  countUpdated_by_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany notification via created_by
  notifications!: notification[];
  getNotifications!: Sequelize.HasManyGetAssociationsMixin<notification>;
  setNotifications!: Sequelize.HasManySetAssociationsMixin<
    notification,
    notificationId
  >;
  addNotification!: Sequelize.HasManyAddAssociationMixin<
    notification,
    notificationId
  >;
  addNotifications!: Sequelize.HasManyAddAssociationsMixin<
    notification,
    notificationId
  >;
  createNotification!: Sequelize.HasManyCreateAssociationMixin<notification>;
  removeNotification!: Sequelize.HasManyRemoveAssociationMixin<
    notification,
    notificationId
  >;
  removeNotifications!: Sequelize.HasManyRemoveAssociationsMixin<
    notification,
    notificationId
  >;
  hasNotification!: Sequelize.HasManyHasAssociationMixin<
    notification,
    notificationId
  >;
  hasNotifications!: Sequelize.HasManyHasAssociationsMixin<
    notification,
    notificationId
  >;
  countNotifications!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany notification via updated_by
  updated_by_notifications!: notification[];
  getUpdated_by_notifications!: Sequelize.HasManyGetAssociationsMixin<notification>;
  setUpdated_by_notifications!: Sequelize.HasManySetAssociationsMixin<
    notification,
    notificationId
  >;
  addUpdated_by_notification!: Sequelize.HasManyAddAssociationMixin<
    notification,
    notificationId
  >;
  addUpdated_by_notifications!: Sequelize.HasManyAddAssociationsMixin<
    notification,
    notificationId
  >;
  createUpdated_by_notification!: Sequelize.HasManyCreateAssociationMixin<notification>;
  removeUpdated_by_notification!: Sequelize.HasManyRemoveAssociationMixin<
    notification,
    notificationId
  >;
  removeUpdated_by_notifications!: Sequelize.HasManyRemoveAssociationsMixin<
    notification,
    notificationId
  >;
  hasUpdated_by_notification!: Sequelize.HasManyHasAssociationMixin<
    notification,
    notificationId
  >;
  hasUpdated_by_notifications!: Sequelize.HasManyHasAssociationsMixin<
    notification,
    notificationId
  >;
  countUpdated_by_notifications!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // user_profile belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // user_profile hasMany user_role_mapping via created_by
  user_role_mappings!: user_role_mapping[];
  getUser_role_mappings!: Sequelize.HasManyGetAssociationsMixin<user_role_mapping>;
  setUser_role_mappings!: Sequelize.HasManySetAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  addUser_role_mapping!: Sequelize.HasManyAddAssociationMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  addUser_role_mappings!: Sequelize.HasManyAddAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  createUser_role_mapping!: Sequelize.HasManyCreateAssociationMixin<user_role_mapping>;
  removeUser_role_mapping!: Sequelize.HasManyRemoveAssociationMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  removeUser_role_mappings!: Sequelize.HasManyRemoveAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  hasUser_role_mapping!: Sequelize.HasManyHasAssociationMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  hasUser_role_mappings!: Sequelize.HasManyHasAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  countUser_role_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany user_role_mapping via updated_by
  updated_by_user_role_mappings!: user_role_mapping[];
  getUpdated_by_user_role_mappings!: Sequelize.HasManyGetAssociationsMixin<user_role_mapping>;
  setUpdated_by_user_role_mappings!: Sequelize.HasManySetAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  addUpdated_by_user_role_mapping!: Sequelize.HasManyAddAssociationMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  addUpdated_by_user_role_mappings!: Sequelize.HasManyAddAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  createUpdated_by_user_role_mapping!: Sequelize.HasManyCreateAssociationMixin<user_role_mapping>;
  removeUpdated_by_user_role_mapping!: Sequelize.HasManyRemoveAssociationMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  removeUpdated_by_user_role_mappings!: Sequelize.HasManyRemoveAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  hasUpdated_by_user_role_mapping!: Sequelize.HasManyHasAssociationMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  hasUpdated_by_user_role_mappings!: Sequelize.HasManyHasAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  countUpdated_by_user_role_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany user_role_mapping via user_profile_id
  user_profile_user_role_mappings!: user_role_mapping[];
  getUser_profile_user_role_mappings!: Sequelize.HasManyGetAssociationsMixin<user_role_mapping>;
  setUser_profile_user_role_mappings!: Sequelize.HasManySetAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  addUser_profile_user_role_mapping!: Sequelize.HasManyAddAssociationMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  addUser_profile_user_role_mappings!: Sequelize.HasManyAddAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  createUser_profile_user_role_mapping!: Sequelize.HasManyCreateAssociationMixin<user_role_mapping>;
  removeUser_profile_user_role_mapping!: Sequelize.HasManyRemoveAssociationMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  removeUser_profile_user_role_mappings!: Sequelize.HasManyRemoveAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  hasUser_profile_user_role_mapping!: Sequelize.HasManyHasAssociationMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  hasUser_profile_user_role_mappings!: Sequelize.HasManyHasAssociationsMixin<
    user_role_mapping,
    user_role_mappingId
  >;
  countUser_profile_user_role_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany user_workspace_access via created_by
  user_workspace_accesses!: user_workspace_access[];
  getUser_workspace_accesses!: Sequelize.HasManyGetAssociationsMixin<user_workspace_access>;
  setUser_workspace_accesses!: Sequelize.HasManySetAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  addUser_workspace_access!: Sequelize.HasManyAddAssociationMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  addUser_workspace_accesses!: Sequelize.HasManyAddAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  createUser_workspace_access!: Sequelize.HasManyCreateAssociationMixin<user_workspace_access>;
  removeUser_workspace_access!: Sequelize.HasManyRemoveAssociationMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  removeUser_workspace_accesses!: Sequelize.HasManyRemoveAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  hasUser_workspace_access!: Sequelize.HasManyHasAssociationMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  hasUser_workspace_accesses!: Sequelize.HasManyHasAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  countUser_workspace_accesses!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany user_workspace_access via reporting_to
  reporting_to_user_workspace_accesses!: user_workspace_access[];
  getReporting_to_user_workspace_accesses!: Sequelize.HasManyGetAssociationsMixin<user_workspace_access>;
  setReporting_to_user_workspace_accesses!: Sequelize.HasManySetAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  addReporting_to_user_workspace_access!: Sequelize.HasManyAddAssociationMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  addReporting_to_user_workspace_accesses!: Sequelize.HasManyAddAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  createReporting_to_user_workspace_access!: Sequelize.HasManyCreateAssociationMixin<user_workspace_access>;
  removeReporting_to_user_workspace_access!: Sequelize.HasManyRemoveAssociationMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  removeReporting_to_user_workspace_accesses!: Sequelize.HasManyRemoveAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  hasReporting_to_user_workspace_access!: Sequelize.HasManyHasAssociationMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  hasReporting_to_user_workspace_accesses!: Sequelize.HasManyHasAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  countReporting_to_user_workspace_accesses!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany user_workspace_access via updated_by
  updated_by_user_workspace_accesses!: user_workspace_access[];
  getUpdated_by_user_workspace_accesses!: Sequelize.HasManyGetAssociationsMixin<user_workspace_access>;
  setUpdated_by_user_workspace_accesses!: Sequelize.HasManySetAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  addUpdated_by_user_workspace_access!: Sequelize.HasManyAddAssociationMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  addUpdated_by_user_workspace_accesses!: Sequelize.HasManyAddAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  createUpdated_by_user_workspace_access!: Sequelize.HasManyCreateAssociationMixin<user_workspace_access>;
  removeUpdated_by_user_workspace_access!: Sequelize.HasManyRemoveAssociationMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  removeUpdated_by_user_workspace_accesses!: Sequelize.HasManyRemoveAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  hasUpdated_by_user_workspace_access!: Sequelize.HasManyHasAssociationMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  hasUpdated_by_user_workspace_accesses!: Sequelize.HasManyHasAssociationsMixin<
    user_workspace_access,
    user_workspace_accessId
  >;
  countUpdated_by_user_workspace_accesses!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany workspace_department via created_by
  workspace_departments!: workspace_department[];
  getWorkspace_departments!: Sequelize.HasManyGetAssociationsMixin<workspace_department>;
  setWorkspace_departments!: Sequelize.HasManySetAssociationsMixin<
    workspace_department,
    workspace_departmentId
  >;
  addWorkspace_department!: Sequelize.HasManyAddAssociationMixin<
    workspace_department,
    workspace_departmentId
  >;
  addWorkspace_departments!: Sequelize.HasManyAddAssociationsMixin<
    workspace_department,
    workspace_departmentId
  >;
  createWorkspace_department!: Sequelize.HasManyCreateAssociationMixin<workspace_department>;
  removeWorkspace_department!: Sequelize.HasManyRemoveAssociationMixin<
    workspace_department,
    workspace_departmentId
  >;
  removeWorkspace_departments!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace_department,
    workspace_departmentId
  >;
  hasWorkspace_department!: Sequelize.HasManyHasAssociationMixin<
    workspace_department,
    workspace_departmentId
  >;
  hasWorkspace_departments!: Sequelize.HasManyHasAssociationsMixin<
    workspace_department,
    workspace_departmentId
  >;
  countWorkspace_departments!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany workspace_department via updated_by
  updated_by_workspace_departments!: workspace_department[];
  getUpdated_by_workspace_departments!: Sequelize.HasManyGetAssociationsMixin<workspace_department>;
  setUpdated_by_workspace_departments!: Sequelize.HasManySetAssociationsMixin<
    workspace_department,
    workspace_departmentId
  >;
  addUpdated_by_workspace_department!: Sequelize.HasManyAddAssociationMixin<
    workspace_department,
    workspace_departmentId
  >;
  addUpdated_by_workspace_departments!: Sequelize.HasManyAddAssociationsMixin<
    workspace_department,
    workspace_departmentId
  >;
  createUpdated_by_workspace_department!: Sequelize.HasManyCreateAssociationMixin<workspace_department>;
  removeUpdated_by_workspace_department!: Sequelize.HasManyRemoveAssociationMixin<
    workspace_department,
    workspace_departmentId
  >;
  removeUpdated_by_workspace_departments!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace_department,
    workspace_departmentId
  >;
  hasUpdated_by_workspace_department!: Sequelize.HasManyHasAssociationMixin<
    workspace_department,
    workspace_departmentId
  >;
  hasUpdated_by_workspace_departments!: Sequelize.HasManyHasAssociationsMixin<
    workspace_department,
    workspace_departmentId
  >;
  countUpdated_by_workspace_departments!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany workspace_designation via created_by
  workspace_designations!: workspace_designation[];
  getWorkspace_designations!: Sequelize.HasManyGetAssociationsMixin<workspace_designation>;
  setWorkspace_designations!: Sequelize.HasManySetAssociationsMixin<
    workspace_designation,
    workspace_designationId
  >;
  addWorkspace_designation!: Sequelize.HasManyAddAssociationMixin<
    workspace_designation,
    workspace_designationId
  >;
  addWorkspace_designations!: Sequelize.HasManyAddAssociationsMixin<
    workspace_designation,
    workspace_designationId
  >;
  createWorkspace_designation!: Sequelize.HasManyCreateAssociationMixin<workspace_designation>;
  removeWorkspace_designation!: Sequelize.HasManyRemoveAssociationMixin<
    workspace_designation,
    workspace_designationId
  >;
  removeWorkspace_designations!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace_designation,
    workspace_designationId
  >;
  hasWorkspace_designation!: Sequelize.HasManyHasAssociationMixin<
    workspace_designation,
    workspace_designationId
  >;
  hasWorkspace_designations!: Sequelize.HasManyHasAssociationsMixin<
    workspace_designation,
    workspace_designationId
  >;
  countWorkspace_designations!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany workspace_designation via updated_by
  updated_by_workspace_designations!: workspace_designation[];
  getUpdated_by_workspace_designations!: Sequelize.HasManyGetAssociationsMixin<workspace_designation>;
  setUpdated_by_workspace_designations!: Sequelize.HasManySetAssociationsMixin<
    workspace_designation,
    workspace_designationId
  >;
  addUpdated_by_workspace_designation!: Sequelize.HasManyAddAssociationMixin<
    workspace_designation,
    workspace_designationId
  >;
  addUpdated_by_workspace_designations!: Sequelize.HasManyAddAssociationsMixin<
    workspace_designation,
    workspace_designationId
  >;
  createUpdated_by_workspace_designation!: Sequelize.HasManyCreateAssociationMixin<workspace_designation>;
  removeUpdated_by_workspace_designation!: Sequelize.HasManyRemoveAssociationMixin<
    workspace_designation,
    workspace_designationId
  >;
  removeUpdated_by_workspace_designations!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace_designation,
    workspace_designationId
  >;
  hasUpdated_by_workspace_designation!: Sequelize.HasManyHasAssociationMixin<
    workspace_designation,
    workspace_designationId
  >;
  hasUpdated_by_workspace_designations!: Sequelize.HasManyHasAssociationsMixin<
    workspace_designation,
    workspace_designationId
  >;
  countUpdated_by_workspace_designations!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany workspace_grading via created_by
  workspace_gradings!: workspace_grading[];
  getWorkspace_gradings!: Sequelize.HasManyGetAssociationsMixin<workspace_grading>;
  setWorkspace_gradings!: Sequelize.HasManySetAssociationsMixin<
    workspace_grading,
    workspace_gradingId
  >;
  addWorkspace_grading!: Sequelize.HasManyAddAssociationMixin<
    workspace_grading,
    workspace_gradingId
  >;
  addWorkspace_gradings!: Sequelize.HasManyAddAssociationsMixin<
    workspace_grading,
    workspace_gradingId
  >;
  createWorkspace_grading!: Sequelize.HasManyCreateAssociationMixin<workspace_grading>;
  removeWorkspace_grading!: Sequelize.HasManyRemoveAssociationMixin<
    workspace_grading,
    workspace_gradingId
  >;
  removeWorkspace_gradings!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace_grading,
    workspace_gradingId
  >;
  hasWorkspace_grading!: Sequelize.HasManyHasAssociationMixin<
    workspace_grading,
    workspace_gradingId
  >;
  hasWorkspace_gradings!: Sequelize.HasManyHasAssociationsMixin<
    workspace_grading,
    workspace_gradingId
  >;
  countWorkspace_gradings!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany workspace_grading via updated_by
  updated_by_workspace_gradings!: workspace_grading[];
  getUpdated_by_workspace_gradings!: Sequelize.HasManyGetAssociationsMixin<workspace_grading>;
  setUpdated_by_workspace_gradings!: Sequelize.HasManySetAssociationsMixin<
    workspace_grading,
    workspace_gradingId
  >;
  addUpdated_by_workspace_grading!: Sequelize.HasManyAddAssociationMixin<
    workspace_grading,
    workspace_gradingId
  >;
  addUpdated_by_workspace_gradings!: Sequelize.HasManyAddAssociationsMixin<
    workspace_grading,
    workspace_gradingId
  >;
  createUpdated_by_workspace_grading!: Sequelize.HasManyCreateAssociationMixin<workspace_grading>;
  removeUpdated_by_workspace_grading!: Sequelize.HasManyRemoveAssociationMixin<
    workspace_grading,
    workspace_gradingId
  >;
  removeUpdated_by_workspace_gradings!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace_grading,
    workspace_gradingId
  >;
  hasUpdated_by_workspace_grading!: Sequelize.HasManyHasAssociationMixin<
    workspace_grading,
    workspace_gradingId
  >;
  hasUpdated_by_workspace_gradings!: Sequelize.HasManyHasAssociationsMixin<
    workspace_grading,
    workspace_gradingId
  >;
  countUpdated_by_workspace_gradings!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany workspace_signal via created_by
  workspace_signals!: workspace_signal[];
  getWorkspace_signals!: Sequelize.HasManyGetAssociationsMixin<workspace_signal>;
  setWorkspace_signals!: Sequelize.HasManySetAssociationsMixin<
    workspace_signal,
    workspace_signalId
  >;
  addWorkspace_signal!: Sequelize.HasManyAddAssociationMixin<
    workspace_signal,
    workspace_signalId
  >;
  addWorkspace_signals!: Sequelize.HasManyAddAssociationsMixin<
    workspace_signal,
    workspace_signalId
  >;
  createWorkspace_signal!: Sequelize.HasManyCreateAssociationMixin<workspace_signal>;
  removeWorkspace_signal!: Sequelize.HasManyRemoveAssociationMixin<
    workspace_signal,
    workspace_signalId
  >;
  removeWorkspace_signals!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace_signal,
    workspace_signalId
  >;
  hasWorkspace_signal!: Sequelize.HasManyHasAssociationMixin<
    workspace_signal,
    workspace_signalId
  >;
  hasWorkspace_signals!: Sequelize.HasManyHasAssociationsMixin<
    workspace_signal,
    workspace_signalId
  >;
  countWorkspace_signals!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany workspace_signal via updated_by
  updated_by_workspace_signals!: workspace_signal[];
  getUpdated_by_workspace_signals!: Sequelize.HasManyGetAssociationsMixin<workspace_signal>;
  setUpdated_by_workspace_signals!: Sequelize.HasManySetAssociationsMixin<
    workspace_signal,
    workspace_signalId
  >;
  addUpdated_by_workspace_signal!: Sequelize.HasManyAddAssociationMixin<
    workspace_signal,
    workspace_signalId
  >;
  addUpdated_by_workspace_signals!: Sequelize.HasManyAddAssociationsMixin<
    workspace_signal,
    workspace_signalId
  >;
  createUpdated_by_workspace_signal!: Sequelize.HasManyCreateAssociationMixin<workspace_signal>;
  removeUpdated_by_workspace_signal!: Sequelize.HasManyRemoveAssociationMixin<
    workspace_signal,
    workspace_signalId
  >;
  removeUpdated_by_workspace_signals!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace_signal,
    workspace_signalId
  >;
  hasUpdated_by_workspace_signal!: Sequelize.HasManyHasAssociationMixin<
    workspace_signal,
    workspace_signalId
  >;
  hasUpdated_by_workspace_signals!: Sequelize.HasManyHasAssociationsMixin<
    workspace_signal,
    workspace_signalId
  >;
  countUpdated_by_workspace_signals!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany workspace via created_by
  created_by_workspaces!: workspace[];
  getCreated_by_workspaces!: Sequelize.HasManyGetAssociationsMixin<workspace>;
  setCreated_by_workspaces!: Sequelize.HasManySetAssociationsMixin<
    workspace,
    workspaceId
  >;
  addCreated_by_workspace!: Sequelize.HasManyAddAssociationMixin<
    workspace,
    workspaceId
  >;
  addCreated_by_workspaces!: Sequelize.HasManyAddAssociationsMixin<
    workspace,
    workspaceId
  >;
  createCreated_by_workspace!: Sequelize.HasManyCreateAssociationMixin<workspace>;
  removeCreated_by_workspace!: Sequelize.HasManyRemoveAssociationMixin<
    workspace,
    workspaceId
  >;
  removeCreated_by_workspaces!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace,
    workspaceId
  >;
  hasCreated_by_workspace!: Sequelize.HasManyHasAssociationMixin<
    workspace,
    workspaceId
  >;
  hasCreated_by_workspaces!: Sequelize.HasManyHasAssociationsMixin<
    workspace,
    workspaceId
  >;
  countCreated_by_workspaces!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany workspace via updated_by
  updated_by_workspaces!: workspace[];
  getUpdated_by_workspaces!: Sequelize.HasManyGetAssociationsMixin<workspace>;
  setUpdated_by_workspaces!: Sequelize.HasManySetAssociationsMixin<
    workspace,
    workspaceId
  >;
  addUpdated_by_workspace!: Sequelize.HasManyAddAssociationMixin<
    workspace,
    workspaceId
  >;
  addUpdated_by_workspaces!: Sequelize.HasManyAddAssociationsMixin<
    workspace,
    workspaceId
  >;
  createUpdated_by_workspace!: Sequelize.HasManyCreateAssociationMixin<workspace>;
  removeUpdated_by_workspace!: Sequelize.HasManyRemoveAssociationMixin<
    workspace,
    workspaceId
  >;
  removeUpdated_by_workspaces!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace,
    workspaceId
  >;
  hasUpdated_by_workspace!: Sequelize.HasManyHasAssociationMixin<
    workspace,
    workspaceId
  >;
  hasUpdated_by_workspaces!: Sequelize.HasManyHasAssociationsMixin<
    workspace,
    workspaceId
  >;
  countUpdated_by_workspaces!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile belongsTo workspace via workspace_id
  workspace!: workspace;
  getWorkspace!: Sequelize.BelongsToGetAssociationMixin<workspace>;
  setWorkspace!: Sequelize.BelongsToSetAssociationMixin<workspace, workspaceId>;
  createWorkspace!: Sequelize.BelongsToCreateAssociationMixin<workspace>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_profile {
    return user_profile.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        workspace_id: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "workspaces",
            key: "id",
          },
        },
        user_id: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        profile_pic: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        status: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "master_user_statuses",
            key: "id",
          },
        },
        created_by: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "user_profiles",
            key: "id",
          },
        },
        updated_by: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "user_profiles",
            key: "id",
          },
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      {
        sequelize,
        tableName: "user_profiles",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "user_profiles_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
