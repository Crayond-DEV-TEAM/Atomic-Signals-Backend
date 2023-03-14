import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface master_notification_typeAttributes {
  id: number;
  label?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type master_notification_typePk = "id";
export type master_notification_typeId =
  master_notification_type[master_notification_typePk];
export type master_notification_typeOptionalAttributes =
  | "label"
  | "created_at"
  | "updated_at";
export type master_notification_typeCreationAttributes = Optional<
  master_notification_typeAttributes,
  master_notification_typeOptionalAttributes
>;

export class master_notification_type
  extends Model<
    master_notification_typeAttributes,
    master_notification_typeCreationAttributes
  >
  implements master_notification_typeAttributes
{
  id!: number;
  label?: string;
  created_at?: Date;
  updated_at?: Date;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof master_notification_type {
    return master_notification_type.init(
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
        tableName: "master_notification_type",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "master_notification_type_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
