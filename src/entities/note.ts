import { DataTypes } from "sequelize";
import { database } from "../db";
import { BaseEntity } from "./base.entity";
import { NoteGroup } from "./noteGroup";

export class Note extends BaseEntity {
  public id!: string;
  public idNoteGroup!: string;
  public title!: string;
  public content: string;

  public noteGroup: NoteGroup;
}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    noteGroup: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: NoteGroup,
        key: "id",
      },
    },
  },
  {
    tableName: "notes",
    sequelize: database,
  }
);

Note.sync({ force: true }).then(() => console.log("Note table created."));
