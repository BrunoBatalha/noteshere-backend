import { inject, injectable } from "inversify";
import { Note } from "../../../entities/note";
import { NoteSpecification } from "../../../specifications/noteSpecification/note.specification";
import { TYPES } from "../../../types";
import { BaseUseCase } from "../../baseUseCase/base.usecase";
import { CreateNoteRequest } from "./create.note.request";
import { ICreateNoteUseCase } from "./icreate.note.usecase";

@injectable()
export class CreateNoteUseCase
  extends BaseUseCase<NoteSpecification>
  implements ICreateNoteUseCase {
  constructor(
    @inject(TYPES.NOTE.ICreateNoteUseCase)
    noteSpecification: NoteSpecification
  ) {
    super(noteSpecification);
  }

  public async execute(request: CreateNoteRequest): Promise<Note> {
    const entityCreated = await this._specification.create(
      request.title,
      request.content,
      request.idNoteGroup
    );
    return entityCreated;
  }
}
