import { inject, injectable } from "inversify";
import { NoteGroup } from "../../entities/noteGroup";
import { TYPES } from "../../types";
import { CreateNoteGroupRequest } from "./createNoteGroupUseCase/create.noteGroup.request";
import { CreateNoteGroupUseCase } from "./createNoteGroupUseCase/create.noteGroup.usecase";
import { GetNoteGroupRequest } from "./getNoteGroupUseCase/get.noteGroup.request";
import { GetNoteGroupUseCase } from "./getNoteGroupUseCase/get.noteGroup.usecase";
import { INoteGroupUseCase } from "./inoteGroup.usecase";

@injectable()
export class NoteGroupUseCase implements INoteGroupUseCase {
  constructor(
    @inject(TYPES.NOTE_GROUP.ICreateNoteGroupUseCase)
    private _createNoteGroupUseCase: CreateNoteGroupUseCase,
    @inject(TYPES.NOTE_GROUP.IGetNoteGroupUseCase)
    private _getNoteGroupUseCase: GetNoteGroupUseCase
  ) {}

  public async create(request: CreateNoteGroupRequest): Promise<NoteGroup | null> {
    const response: NoteGroup | null = await this._createNoteGroupUseCase.process(request);
    return response;
  }

  public async get(request: GetNoteGroupRequest): Promise<NoteGroup | null> {
    const response: NoteGroup | null = await this._getNoteGroupUseCase.process(request);
    return response;
  }
}
