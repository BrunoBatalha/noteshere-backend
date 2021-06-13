import { DataTypes } from "sequelize";
import { database } from "../db";
import { BaseEntity } from "./base.entity";

export class NoteGroup extends BaseEntity {
  public id!: string;
  public idUser!: string;
  public title!: string;
}

NoteGroup.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    // todo: chave estrangeira
    idUser: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "notesGroup",
    sequelize: database,
  }
);

NoteGroup.sync({ force: true }).then(() =>
  console.log("Note Group table created.")
);
