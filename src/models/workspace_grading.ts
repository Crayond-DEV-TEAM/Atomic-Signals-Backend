import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { feedback, feedbackId } from "./feedback";
import type { user_profile, user_profileId } from "./user_profile";
import type { workspace, workspaceId } from "./workspace";

export interface workspace_gradingAttributes {
  id: string;
  workspace_id?: string;
  label?: string;
  description?: string;
  grade_value?: number;
  is_active?: boolean;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type workspace_gradingPk = "id";
export type workspace_gradingId = workspace_grading[workspace_gradingPk];
export type workspace_gradingOptionalAttributes =
  | "id"
  | "workspace_id"
  | "label"
  | "description"
  | "grade_value"
  | "is_active"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type workspace_gradingCreationAttributes = Optional<
  workspace_gradingAttributes,
  workspace_gradingOptionalAttributes
>;

export class workspace_grading
  extends Model<
    workspace_gradingAttributes,
    workspace_gradingCreationAttributes
  >
  implements workspace_gradingAttributes
{
  id!: string;
  workspace_id?: string;
  label?: string;
  description?: string;
  grade_value?: number;
  is_active?: boolean;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // workspace_grading belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // workspace_grading belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // workspace_grading hasMany feedback via grading
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
  // workspace_grading belongsTo workspace via workspace_id
  workspace!: workspace;
  getWorkspace!: Sequelize.BelongsToGetAssociationMixin<workspace>;
  setWorkspace!: Sequelize.BelongsToSetAssociationMixin<workspace, workspaceId>;
  createWorkspace!: Sequelize.BelongsToCreateAssociationMixin<workspace>;

  static initModel(sequelize: Sequelize.Sequelize): typeof workspace_grading {
    return workspace_grading.init(
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
        label: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        grade_value: {
          type: DataTypes.REAL,
          allowNull: true,
        },
        is_active: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
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
        tableName: "workspace_grading",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "workspace_grading_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
