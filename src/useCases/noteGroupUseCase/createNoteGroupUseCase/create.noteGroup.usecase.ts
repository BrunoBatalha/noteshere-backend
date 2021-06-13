import { inject, injectable } from "inversify";
import { NoteGroup } from "../../../entities/noteGroup";
import { NoteGroupSpecification } from "../../../specifications/noteGroupSpecification/noteGroup.specification";
import { TYPES } from "../../../types";
import { CreateNoteGroupValidator } from "../../../validators/noteGroupValidator/create.noteGroup.validator";
import { BaseUseCase } from "../../baseUseCase/base.usecase";
import { CreateNoteGroupRequest } from "./create.noteGroup.request";
import { ICreateNoteGroupUseCase } from "./icreate.noteGroup.usecase";

@injectable()
export class CreateNoteGroupUseCase
  extends BaseUseCase<
    NoteGroupSpecification,
    CreateNoteGroupRequest,
    NoteGroup,
    CreateNoteGroupValidator
  >
  implements ICreateNoteGroupUseCase {
  constructor(
    @inject(TYPES.NOTE_GROUP.ICreateNoteGroupUseCase)
    userSpecification: NoteGroupSpecification,
    @inject(TYPES.NOTE_GROUP.VALIDATOR.ICreateNoteGroupValidator)
    noteGroupSpecification: CreateNoteGroupValidator
  ) {
    super(userSpecification, noteGroupSpecification);
  }

  protected async execute(): Promise<NoteGroup> {
    const entityCreated = await this._specification.create(this._request.title);
    return entityCreated;
  }
}
