import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { user_profile, user_profileId } from "./user_profile";

export interface master_user_statusAttributes {
  id: number;
  label?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type master_user_statusPk = "id";
export type master_user_statusId = master_user_status[master_user_statusPk];
export type master_user_statusOptionalAttributes =
  | "label"
  | "created_at"
  | "updated_at";
export type master_user_statusCreationAttributes = Optional<
  master_user_statusAttributes,
  master_user_statusOptionalAttributes
>;

export class master_user_status
  extends Model<
    master_user_statusAttributes,
    master_user_statusCreationAttributes
  >
  implements master_user_statusAttributes
{
  id!: number;
  label?: string;
  created_at?: Date;
  updated_at?: Date;

  // master_user_status hasMany user_profile via status
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

  static initModel(sequelize: Sequelize.Sequelize): typeof master_user_status {
    return master_user_status.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        label: {
          type: DataTypes.STRING,
          allowNull: true,
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
        tableName: "master_user_statuses",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "master_user_statuses_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
