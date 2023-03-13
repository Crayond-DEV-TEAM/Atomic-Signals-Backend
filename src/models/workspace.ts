import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { feedback_type, feedback_typeId } from "./feedback_type";
import type { feedback, feedbackId } from "./feedback";
import type { user_profile, user_profileId } from "./user_profile";
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

export interface workspaceAttributes {
  id: string;
  name?: string;
  logo?: string;
  feedback_type?: number;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type workspacePk = "id";
export type workspaceId = workspace[workspacePk];
export type workspaceOptionalAttributes =
  | "name"
  | "logo"
  | "feedback_type"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type workspaceCreationAttributes = Optional<
  workspaceAttributes,
  workspaceOptionalAttributes
>;

export class workspace
  extends Model<workspaceAttributes, workspaceCreationAttributes>
  implements workspaceAttributes
{
  id!: string;
  name?: string;
  logo?: string;
  feedback_type?: number;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // workspace belongsTo feedback_type via feedback_type
  feedback_type_feedback_type!: feedback_type;
  getFeedback_type_feedback_type!: Sequelize.BelongsToGetAssociationMixin<feedback_type>;
  setFeedback_type_feedback_type!: Sequelize.BelongsToSetAssociationMixin<
    feedback_type,
    feedback_typeId
  >;
  createFeedback_type_feedback_type!: Sequelize.BelongsToCreateAssociationMixin<feedback_type>;
  // workspace belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // workspace belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // workspace hasMany feedback via workspace_id
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
  // workspace hasMany user_profile via workspace_id
  user_profiles!: user_profile[];
  getUser_profiles!: Sequelize.HasManyGetAssociationsMixin<user_profile>;
  setUser_profiles!: Sequelize.HasManySetAssociationsMixin<
    user_profile,
    user_profileId
  >;
  addUser_profile!: Sequelize.HasManyAddAssociationMixin<
    user_profile,
    user_profileId
  >;
  addUser_profiles!: Sequelize.HasManyAddAssociationsMixin<
    user_profile,
    user_profileId
  >;
  createUser_profile!: Sequelize.HasManyCreateAssociationMixin<user_profile>;
  removeUser_profile!: Sequelize.HasManyRemoveAssociationMixin<
    user_profile,
    user_profileId
  >;
  removeUser_profiles!: Sequelize.HasManyRemoveAssociationsMixin<
    user_profile,
    user_profileId
  >;
  hasUser_profile!: Sequelize.HasManyHasAssociationMixin<
    user_profile,
    user_profileId
  >;
  hasUser_profiles!: Sequelize.HasManyHasAssociationsMixin<
    user_profile,
    user_profileId
  >;
  countUser_profiles!: Sequelize.HasManyCountAssociationsMixin;
  // workspace hasMany user_role_mapping via workspace_id
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
  // workspace hasMany user_workspace_access via workspace_id
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
  // workspace hasMany workspace_department via workspace_id
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
  // workspace hasMany workspace_designation via workspace_id
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
  // workspace hasMany workspace_grading via workspace_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof workspace {
    return workspace.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        logo: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        feedback_type: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "feedback_types",
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
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "workspaces",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "workspaces_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
