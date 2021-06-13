import { injectable } from "inversify";
import { Note } from "../../entities/note";
import { INoteSpecification } from "./inote.specification";

@injectable()
export class NoteSpecification implements INoteSpecification {
  public async create(
    title: string,
    content: string,
    idNoteGroup: number
  ): Promise<Note> {
    return await Note.create<Note>({ title, content, idNoteGroup });
  }
}
