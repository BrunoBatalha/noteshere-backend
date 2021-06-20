import { Association, DataTypes } from "sequelize";
import { database } from "../db";
import { BaseEntity } from "./base.entity";
import { NoteGroup } from "../entities/noteGroup";

export class User extends BaseEntity {
  public id!: string;
  public username!: string;
  public password!: string;

  public static associations: {
    noteGroups: Association<User, NoteGroup>;
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noteGroups: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: NoteGroup,
        key: "id",
      },
    },
  },
  {
    tableName: "users",
    sequelize: database,
  }
);

User.hasMany(NoteGroup, { as: "noteGroups", foreignKey: "userId" });
User.sync({ force: true }).then(() => console.log("User table created."));
