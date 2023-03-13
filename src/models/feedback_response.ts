import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { feedback, feedbackId } from "./feedback";
import type { user_profile, user_profileId } from "./user_profile";

export interface feedback_responseAttributes {
  id: string;
  feedback_id?: string;
  reason?: string;
  description?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type feedback_responsePk = "id";
export type feedback_responseId = feedback_response[feedback_responsePk];
export type feedback_responseOptionalAttributes =
  | "feedback_id"
  | "reason"
  | "description"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type feedback_responseCreationAttributes = Optional<
  feedback_responseAttributes,
  feedback_responseOptionalAttributes
>;

export class feedback_response
  extends Model<
    feedback_responseAttributes,
    feedback_responseCreationAttributes
  >
  implements feedback_responseAttributes
{
  id!: string;
  feedback_id?: string;
  reason?: string;
  description?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // feedback_response belongsTo feedback via feedback_id
  feedback!: feedback;
  getFeedback!: Sequelize.BelongsToGetAssociationMixin<feedback>;
  setFeedback!: Sequelize.BelongsToSetAssociationMixin<feedback, feedbackId>;
  createFeedback!: Sequelize.BelongsToCreateAssociationMixin<feedback>;
  // feedback_response belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // feedback_response belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof feedback_response {
    return feedback_response.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        feedback_id: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "feedbacks",
            key: "id",
          },
        },
        reason: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        description: {
          type: DataTypes.STRING,
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
        tableName: "feedback_responses",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "feedback_responses_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
