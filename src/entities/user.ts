import { DataTypes } from "sequelize";
import { database } from "../db";
import { BaseEntity } from "./base.entity";

export class User extends BaseEntity {
  public id!: string;
  public username!: string;
  public password!: string;
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
  },
  {
    tableName: "users",
    sequelize: database,
  }
);

User.sync({ force: true }).then(() => console.log("User table created."));
