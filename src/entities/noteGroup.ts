import { DataTypes } from "sequelize";
import { database } from "../db";
import { BaseEntity } from "./base.entity";
import { Note } from "./note";
import { User } from "./user";

export class NoteGroup extends BaseEntity {
  public id!: string;
  public title!: string;

  public userId!: string;
  public user!: User;

  public notes: Array<Note>;
}

NoteGroup.init(
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
    user: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "notesGroup",
    sequelize: database,
  }
);

NoteGroup.hasMany(Note, { as: "notes", foreignKey: "noteGroupId" });
NoteGroup.sync({ force: true }).then(() => console.log("Note Group table created."));
