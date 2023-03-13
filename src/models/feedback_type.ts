import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { user_profile, user_profileId } from "./user_profile";
import type { workspace, workspaceId } from "./workspace";

export interface feedback_typeAttributes {
  id: number;
  label?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type feedback_typePk = "id";
export type feedback_typeId = feedback_type[feedback_typePk];
export type feedback_typeOptionalAttributes =
  | "label"
  | "created_by"
  | "updated_by"
  | "created_at"
  | "updated_at";
export type feedback_typeCreationAttributes = Optional<
  feedback_typeAttributes,
  feedback_typeOptionalAttributes
>;

export class feedback_type
  extends Model<feedback_typeAttributes, feedback_typeCreationAttributes>
  implements feedback_typeAttributes
{
  id!: number;
  label?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;

  // feedback_type hasMany workspace via feedback_type
  workspaces!: workspace[];
  getWorkspaces!: Sequelize.HasManyGetAssociationsMixin<workspace>;
  setWorkspaces!: Sequelize.HasManySetAssociationsMixin<workspace, workspaceId>;
  addWorkspace!: Sequelize.HasManyAddAssociationMixin<workspace, workspaceId>;
  addWorkspaces!: Sequelize.HasManyAddAssociationsMixin<workspace, workspaceId>;
  createWorkspace!: Sequelize.HasManyCreateAssociationMixin<workspace>;
  removeWorkspace!: Sequelize.HasManyRemoveAssociationMixin<
    workspace,
    workspaceId
  >;
  removeWorkspaces!: Sequelize.HasManyRemoveAssociationsMixin<
    workspace,
    workspaceId
  >;
  hasWorkspace!: Sequelize.HasManyHasAssociationMixin<workspace, workspaceId>;
  hasWorkspaces!: Sequelize.HasManyHasAssociationsMixin<workspace, workspaceId>;
  countWorkspaces!: Sequelize.HasManyCountAssociationsMixin;
  // feedback_type belongsTo user_profile via created_by
  created_by_user_profile!: user_profile;
  getCreated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setCreated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createCreated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;
  // feedback_type belongsTo user_profile via updated_by
  updated_by_user_profile!: user_profile;
  getUpdated_by_user_profile!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUpdated_by_user_profile!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUpdated_by_user_profile!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof feedback_type {
    return feedback_type.init(
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
        tableName: "feedback_types",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "feedback_types_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
