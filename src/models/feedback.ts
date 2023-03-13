import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type {
  feedback_response,
  feedback_responseId,
} from "./feedback_response";
import type { user_profile, user_profileId } from "./user_profile";
import type {
  workspace_grading,
  workspace_gradingId,
} from "./workspace_grading";
import type { workspace_signal, workspace_signalId } from "./workspace_signal";
import type { workspace, workspaceId } from "./workspace";

export interface feedbackAttributes {
  id: string;
  workspace_id?: string;
  signal?: string;
  grading?: string;
  from?: string;
  to?: string;
  is_responded?: boolean;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type feedbackPk = "id";
export type feedbackId = feedback[feedbackPk];
export type feedbackOptionalAttributes =
  | "workspace_id"
  | "signal"
  | "grading"
  | "from"
  | "to"
  | "is_responded"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type feedbackCreationAttributes = Optional<
  feedbackAttributes,
  feedbackOptionalAttributes
>;

export class feedback
  extends Model<feedbackAttributes, feedbackCreationAttributes>
  implements feedbackAttributes
{
  id!: string;
  workspace_id?: string;
  signal?: string;
  grading?: string;
  from?: string;
  to?: string;
  is_responded?: boolean;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // feedback hasMany feedback_response via feedback_id
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
  // feedback belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // feedback belongsTo user_profile via from
  from_user_profile!: user_profile;
  getFrom_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setFrom_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createFrom_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // feedback belongsTo user_profile via to
  to_user_profile!: user_profile;
  getTo_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setTo_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createTo_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // feedback belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // feedback belongsTo workspace_grading via grading
  grading_workspace_grading!: workspace_grading;
  getGrading_workspace_grading!: Sequelize.BelongsToGetAssociationMixin<workspace_grading>;
  setGrading_workspace_grading!: Sequelize.BelongsToSetAssociationMixin<
    workspace_grading,
    workspace_gradingId
  >;
  createGrading_workspace_grading!: Sequelize.BelongsToCreateAssociationMixin<workspace_grading>;
  // feedback belongsTo workspace_signal via signal
  signal_workspace_signal!: workspace_signal;
  getSignal_workspace_signal!: Sequelize.BelongsToGetAssociationMixin<workspace_signal>;
  setSignal_workspace_signal!: Sequelize.BelongsToSetAssociationMixin<
    workspace_signal,
    workspace_signalId
  >;
  createSignal_workspace_signal!: Sequelize.BelongsToCreateAssociationMixin<workspace_signal>;
  // feedback belongsTo workspace via workspace_id
  workspace!: workspace;
  getWorkspace!: Sequelize.BelongsToGetAssociationMixin<workspace>;
  setWorkspace!: Sequelize.BelongsToSetAssociationMixin<workspace, workspaceId>;
  createWorkspace!: Sequelize.BelongsToCreateAssociationMixin<workspace>;

  static initModel(sequelize: Sequelize.Sequelize): typeof feedback {
    return feedback.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
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
        signal: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "workspace_signals",
            key: "id",
          },
        },
        grading: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "workspace_grading",
            key: "id",
          },
        },
        from: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "user_profiles",
            key: "id",
          },
        },
        to: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "user_profiles",
            key: "id",
          },
        },
        is_responded: {
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
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "feedbacks",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "feedbacks_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
