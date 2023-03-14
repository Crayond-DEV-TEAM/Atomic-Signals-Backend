import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type {
  feedback_reminder,
  feedback_reminderId,
} from "./feedback_reminder";
import type { user_profile, user_profileId } from "./user_profile";

export interface notificationAttributes {
  id: string;
  reminder_id?: string;
  type?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type notificationPk = "id";
export type notificationId = notification[notificationPk];
export type notificationOptionalAttributes =
  | "id"
  | "reminder_id"
  | "type"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type notificationCreationAttributes = Optional<
  notificationAttributes,
  notificationOptionalAttributes
>;

export class notification
  extends Model<notificationAttributes, notificationCreationAttributes>
  implements notificationAttributes
{
  id!: string;
  reminder_id?: string;
  type?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // notification belongsTo feedback_reminder via reminder_id
  reminder!: feedback_reminder;
  getReminder!: Sequelize.BelongsToGetAssociationMixin<feedback_reminder>;
  setReminder!: Sequelize.BelongsToSetAssociationMixin<
    feedback_reminder,
    feedback_reminderId
  >;
  createReminder!: Sequelize.BelongsToCreateAssociationMixin<feedback_reminder>;
  // notification belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // notification belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof notification {
    return notification.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        reminder_id: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "feedback_reminder",
            key: "id",
          },
        },
        type: {
          type: DataTypes.UUID,
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
        tableName: "notification",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "notification_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
