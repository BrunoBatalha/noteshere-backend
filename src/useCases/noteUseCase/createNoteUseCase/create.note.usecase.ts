import { inject, injectable } from "inversify";
import { Note } from "../../../entities/note";
import { NoteSpecification } from "../../../specifications/noteSpecification/note.specification";
import { TYPES } from "../../../types";
import { CreateNoteValidator } from "../../../validators/noteValidator/create.note.validator";
import { BaseUseCase } from "../../baseUseCase/base.usecase";
import { CreateNoteRequest } from "./create.note.request";
import { ICreateNoteUseCase } from "./icreate.note.usecase";

@injectable()
export class CreateNoteUseCase
  extends BaseUseCase<
    NoteSpecification,
    CreateNoteRequest,
    Note,
    CreateNoteValidator
  >
  implements ICreateNoteUseCase {
  constructor(
    @inject(TYPES.NOTE.ICreateNoteUseCase)
    noteSpecification: NoteSpecification,
    @inject(TYPES.NOTE.VALIDATOR.ICreateNoteValidator)
    createNoteValidator: CreateNoteValidator
  ) {
    super(noteSpecification, createNoteValidator);
  }

  protected async execute(): Promise<Note> {
    const entityCreated = await this._specification.create(
      this._request.title,
      this._request.content,
      this._request.idNoteGroup
    );
    return entityCreated;
  }
}
