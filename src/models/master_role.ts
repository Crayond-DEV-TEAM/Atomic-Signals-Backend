import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type {
  user_role_mapping,
  user_role_mappingId,
} from "./user_role_mapping";

export interface master_roleAttributes {
  id: number;
  label?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type master_rolePk = "id";
export type master_roleId = master_role[master_rolePk];
export type master_roleOptionalAttributes =
  | "label"
  | "created_at"
  | "updated_at";
export type master_roleCreationAttributes = Optional<
  master_roleAttributes,
  master_roleOptionalAttributes
>;

export class master_role
  extends Model<master_roleAttributes, master_roleCreationAttributes>
  implements master_roleAttributes
{
  id!: number;
  label?: string;
  created_at?: Date;
  updated_at?: Date;

  // master_role hasMany user_role_mapping via role_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof master_role {
    return master_role.init(
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
        tableName: "master_roles",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "master_roles_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
