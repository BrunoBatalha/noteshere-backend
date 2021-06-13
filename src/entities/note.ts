import { DataTypes } from "sequelize";
import { database } from "../db";
import { BaseEntity } from "./base.entity";

export class Note extends BaseEntity {
  public id!: string;
  public idNoteGroup!: string;
  public title!: string;
  public content: string;
}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    // todo: chave estrangeira
    idNoteGroup: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "notesGroup",
    sequelize: database,
  }
);

Note.sync({ force: true }).then(() => console.log("Note table created."));
