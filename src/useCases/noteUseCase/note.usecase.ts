import { inject, injectable } from "inversify";
import { Note } from "../../entities/note";
import { TYPES } from "../../types";
import { CreateNoteRequest } from "./createNoteUseCase/create.note.request";
import { CreateNoteUseCase } from "./createNoteUseCase/create.note.usecase";
import { INoteUseCase } from "./inote.usecase";

@injectable()
export class NoteUseCase implements INoteUseCase {
  constructor(
    @inject(TYPES.NOTE.ICreateNoteUseCase)
    private _createNoteUserCase: CreateNoteUseCase
  ) {}

  public async create(request: CreateNoteRequest): Promise<Note> {
    const response: Note = await this._createNoteUserCase.execute(request);
    return response;
  }
}
