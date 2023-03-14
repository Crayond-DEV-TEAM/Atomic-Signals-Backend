import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { workspace, workspaceId } from "./workspace";

export interface master_feedback_typeAttributes {
  id: number;
  label?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type master_feedback_typePk = "id";
export type master_feedback_typeId =
  master_feedback_type[master_feedback_typePk];
export type master_feedback_typeOptionalAttributes =
  | "label"
  | "created_at"
  | "updated_at";
export type master_feedback_typeCreationAttributes = Optional<
  master_feedback_typeAttributes,
  master_feedback_typeOptionalAttributes
>;

export class master_feedback_type
  extends Model<
    master_feedback_typeAttributes,
    master_feedback_typeCreationAttributes
  >
  implements master_feedback_typeAttributes
{
  id!: number;
  label?: string;
  created_at?: Date;
  updated_at?: Date;

  // master_feedback_type hasMany workspace via feedback_type
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

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof master_feedback_type {
    return master_feedback_type.init(
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
        tableName: "master_feedback_types",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "master_feedback_types_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
