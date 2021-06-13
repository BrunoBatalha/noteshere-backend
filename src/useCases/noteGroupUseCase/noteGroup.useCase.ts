import { inject, injectable } from "inversify";
import { NoteGroup } from "../../entities/noteGroup";
import { TYPES } from "../../types";
import { CreateNoteGroupRequest } from "./createNoteGroupUseCase/create.noteGroup.request";
import { CreateNoteGroupUseCase } from "./createNoteGroupUseCase/create.noteGroup.usecase";
import { INoteGroupUseCase } from "./inoteGroup.usecase";

@injectable()
export class NoteGroupUseCase implements INoteGroupUseCase {
  constructor(
    @inject(TYPES.NOTE_GROUP.ICreateNoteGroupUseCase)
    private _createNoteGroupUserCase: CreateNoteGroupUseCase
  ) {}

  public async create(request: CreateNoteGroupRequest): Promise<NoteGroup> {
    const response: NoteGroup = await this._createNoteGroupUserCase.execute(
      request
    );
    return response;
  }
}
