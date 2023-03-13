import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface _prisma_migrationAttributes {
  id: string;
  checksum: string;
  finished_at?: Date;
  migration_name: string;
  logs?: string;
  rolled_back_at?: Date;
  started_at: Date;
  applied_steps_count: number;
}

export type _prisma_migrationPk = "id";
export type _prisma_migrationId = _prisma_migration[_prisma_migrationPk];
export type _prisma_migrationOptionalAttributes =
  | "finished_at"
  | "logs"
  | "rolled_back_at"
  | "started_at"
  | "applied_steps_count";
export type _prisma_migrationCreationAttributes = Optional<
  _prisma_migrationAttributes,
  _prisma_migrationOptionalAttributes
>;

export class _prisma_migration
  extends Model<
    _prisma_migrationAttributes,
    _prisma_migrationCreationAttributes
  >
  implements _prisma_migrationAttributes
{
  id!: string;
  checksum!: string;
  finished_at?: Date;
  migration_name!: string;
  logs?: string;
  rolled_back_at?: Date;
  started_at!: Date;
  applied_steps_count!: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof _prisma_migration {
    return _prisma_migration.init(
      {
        id: {
          type: DataTypes.STRING(36),
          allowNull: false,
          primaryKey: true,
        },
        checksum: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        finished_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        migration_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        logs: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        rolled_back_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        started_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.fn("now"),
        },
        applied_steps_count: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: "_prisma_migrations",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "_prisma_migrations_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
