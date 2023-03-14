import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { master_role, master_roleId } from "./master_role";
import type { user_profile, user_profileId } from "./user_profile";
import type { workspace, workspaceId } from "./workspace";

export interface user_role_mappingAttributes {
  id: string;
  workspace_id?: string;
  user_profile_id?: string;
  role_id?: number;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type user_role_mappingPk = "id";
export type user_role_mappingId = user_role_mapping[user_role_mappingPk];
export type user_role_mappingOptionalAttributes =
  | "id"
  | "workspace_id"
  | "user_profile_id"
  | "role_id"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type user_role_mappingCreationAttributes = Optional<
  user_role_mappingAttributes,
  user_role_mappingOptionalAttributes
>;

export class user_role_mapping
  extends Model<
    user_role_mappingAttributes,
    user_role_mappingCreationAttributes
  >
  implements user_role_mappingAttributes
{
  id!: string;
  workspace_id?: string;
  user_profile_id?: string;
  role_id?: number;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // user_role_mapping belongsTo master_role via role_id
  role!: master_role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<master_role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<master_role, master_roleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<master_role>;
  // user_role_mapping belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // user_role_mapping belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // user_role_mapping belongsTo user_profile via user_profile_id
  user_profile!: user_profile;
  getUser_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUser_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUser_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // user_role_mapping belongsTo workspace via workspace_id
  workspace!: workspace;
  getWorkspace!: Sequelize.BelongsToGetAssociationMixin<workspace>;
  setWorkspace!: Sequelize.BelongsToSetAssociationMixin<workspace, workspaceId>;
  createWorkspace!: Sequelize.BelongsToCreateAssociationMixin<workspace>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_role_mapping {
    return user_role_mapping.init(
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
        user_profile_id: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "user_profiles",
            key: "id",
          },
        },
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "master_roles",
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
        tableName: "user_role_mapping",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "user_role_mapping_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
