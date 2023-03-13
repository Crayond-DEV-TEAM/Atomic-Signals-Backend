import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { feedback, feedbackId } from "./feedback";
import type { user_profile, user_profileId } from "./user_profile";

export interface workspace_signalAttributes {
  id: string;
  label?: string;
  is_active?: boolean;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type workspace_signalPk = "id";
export type workspace_signalId = workspace_signal[workspace_signalPk];
export type workspace_signalOptionalAttributes =
  | "label"
  | "is_active"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type workspace_signalCreationAttributes = Optional<
  workspace_signalAttributes,
  workspace_signalOptionalAttributes
>;

export class workspace_signal
  extends Model<workspace_signalAttributes, workspace_signalCreationAttributes>
  implements workspace_signalAttributes
{
  id!: string;
  label?: string;
  is_active?: boolean;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // workspace_signal belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // workspace_signal hasMany feedback via signal
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

  static initModel(sequelize: Sequelize.Sequelize): typeof workspace_signal {
    return workspace_signal.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        label: {
          type: DataTypes.STRING,
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
        tableName: "workspace_signals",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "workspace_signals_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
