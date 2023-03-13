import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { user_profile, user_profileId } from "./user_profile";
import type {
  user_workspace_access,
  user_workspace_accessId,
} from "./user_workspace_access";
import type { workspace, workspaceId } from "./workspace";

export interface workspace_departmentAttributes {
  id: string;
  workspace_id?: string;
  label?: string;
  description?: string;
  is_active?: boolean;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type workspace_departmentPk = "id";
export type workspace_departmentId =
  workspace_department[workspace_departmentPk];
export type workspace_departmentOptionalAttributes =
  | "workspace_id"
  | "label"
  | "description"
  | "is_active"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type workspace_departmentCreationAttributes = Optional<
  workspace_departmentAttributes,
  workspace_departmentOptionalAttributes
>;

export class workspace_department
  extends Model<
    workspace_departmentAttributes,
    workspace_departmentCreationAttributes
  >
  implements workspace_departmentAttributes
{
  id!: string;
  workspace_id?: string;
  label?: string;
  description?: string;
  is_active?: boolean;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // workspace_department belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // workspace_department belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // workspace_department hasMany user_workspace_access via department
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
  // workspace_department belongsTo workspace via workspace_id
  workspace!: workspace;
  getWorkspace!: Sequelize.BelongsToGetAssociationMixin<workspace>;
  setWorkspace!: Sequelize.BelongsToSetAssociationMixin<workspace, workspaceId>;
  createWorkspace!: Sequelize.BelongsToCreateAssociationMixin<workspace>;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof workspace_department {
    return workspace_department.init(
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
        label: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        description: {
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
        tableName: "workspace_department",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "workspace_department_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
