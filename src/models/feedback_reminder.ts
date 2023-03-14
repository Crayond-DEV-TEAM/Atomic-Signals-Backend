import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { notification, notificationId } from "./notification";
import type { user_profile, user_profileId } from "./user_profile";

export interface feedback_reminderAttributes {
  id: string;
  from?: string;
  to?: string;
  remind_by?: Date;
  status?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type feedback_reminderPk = "id";
export type feedback_reminderId = feedback_reminder[feedback_reminderPk];
export type feedback_reminderOptionalAttributes =
  | "id"
  | "from"
  | "to"
  | "remind_by"
  | "status"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type feedback_reminderCreationAttributes = Optional<
  feedback_reminderAttributes,
  feedback_reminderOptionalAttributes
>;

export class feedback_reminder
  extends Model<
    feedback_reminderAttributes,
    feedback_reminderCreationAttributes
  >
  implements feedback_reminderAttributes
{
  id!: string;
  from?: string;
  to?: string;
  remind_by?: Date;
  status?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // feedback_reminder hasMany notification via reminder_id
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
  // feedback_reminder belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // feedback_reminder belongsTo user_profile via from
  from_user_profile!: user_profile;
  getFrom_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setFrom_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createFrom_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // feedback_reminder belongsTo user_profile via to
  to_user_profile!: user_profile;
  getTo_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setTo_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createTo_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // feedback_reminder belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof feedback_reminder {
    return feedback_reminder.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
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
        remind_by: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        status: {
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
        tableName: "feedback_reminder",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "feedback_reminder_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
