import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { user_profile, user_profileId } from "./user_profile";
import type {
  workspace_department,
  workspace_departmentId,
} from "./workspace_department";
import type {
  workspace_designation,
  workspace_designationId,
} from "./workspace_designation";
import type { workspace, workspaceId } from "./workspace";

export interface user_workspace_accessAttributes {
  id: string;
  workspace_id?: string;
  date_of_joining?: string;
  department?: string;
  designation?: string;
  reporting_to?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type user_workspace_accessPk = "id";
export type user_workspace_accessId =
  user_workspace_access[user_workspace_accessPk];
export type user_workspace_accessOptionalAttributes =
  | "workspace_id"
  | "date_of_joining"
  | "department"
  | "designation"
  | "reporting_to"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type user_workspace_accessCreationAttributes = Optional<
  user_workspace_accessAttributes,
  user_workspace_accessOptionalAttributes
>;

export class user_workspace_access
  extends Model<
    user_workspace_accessAttributes,
    user_workspace_accessCreationAttributes
  >
  implements user_workspace_accessAttributes
{
  id!: string;
  workspace_id?: string;
  date_of_joining?: string;
  department?: string;
  designation?: string;
  reporting_to?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // user_workspace_access belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // user_workspace_access belongsTo user_profile via reporting_to
  reporting_to_user_profile!: user_profile;
  getReporting_to_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setReporting_to_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createReporting_to_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // user_workspace_access belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // user_workspace_access belongsTo workspace_department via department
  department_workspace_department!: workspace_department;
  getDepartment_workspace_department!: Sequelize.BelongsToGetAssociationMixin<workspace_department>;
  setDepartment_workspace_department!: Sequelize.BelongsToSetAssociationMixin<
    workspace_department,
    workspace_departmentId
  >;
  createDepartment_workspace_department!: Sequelize.BelongsToCreateAssociationMixin<workspace_department>;
  // user_workspace_access belongsTo workspace_designation via designation
  designation_workspace_designation!: workspace_designation;
  getDesignation_workspace_designation!: Sequelize.BelongsToGetAssociationMixin<workspace_designation>;
  setDesignation_workspace_designation!: Sequelize.BelongsToSetAssociationMixin<
    workspace_designation,
    workspace_designationId
  >;
  createDesignation_workspace_designation!: Sequelize.BelongsToCreateAssociationMixin<workspace_designation>;
  // user_workspace_access belongsTo workspace via workspace_id
  workspace!: workspace;
  getWorkspace!: Sequelize.BelongsToGetAssociationMixin<workspace>;
  setWorkspace!: Sequelize.BelongsToSetAssociationMixin<workspace, workspaceId>;
  createWorkspace!: Sequelize.BelongsToCreateAssociationMixin<workspace>;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof user_workspace_access {
    return user_workspace_access.init(
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
        date_of_joining: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        department: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "workspace_department",
            key: "id",
          },
        },
        designation: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "workspace_designation",
            key: "id",
          },
        },
        reporting_to: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "user_profiles",
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
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "user_workspace_access",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "user_workspace_access_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
