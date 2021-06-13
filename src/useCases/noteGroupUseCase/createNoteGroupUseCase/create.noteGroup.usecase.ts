import { inject, injectable } from "inversify";
import { NoteGroup } from "../../../entities/noteGroup";
import { NoteGroupSpecification } from "../../../specifications/noteGroupSpecification/noteGroupSpecification";
import { TYPES } from "../../../types";
import { BaseUseCase } from "../../baseUseCase/base.usecase";
import { CreateNoteGroupRequest } from "./create.noteGroup.request";
import { ICreateNoteGroupUseCase } from "./icreate.noteGroup.usecase";

@injectable()
export class CreateNoteGroupUseCase
  extends BaseUseCase<NoteGroupSpecification>
  implements ICreateNoteGroupUseCase {
  constructor(
    @inject(TYPES.NOTE_GROUP.ICreateNoteGroupUseCase)
    userSpecification: NoteGroupSpecification
  ) {
    super(userSpecification);
  }

  public async execute(request: CreateNoteGroupRequest): Promise<NoteGroup> {
    const entityCreated = await this._specification.create(request.title);
    return entityCreated;
  }
}
