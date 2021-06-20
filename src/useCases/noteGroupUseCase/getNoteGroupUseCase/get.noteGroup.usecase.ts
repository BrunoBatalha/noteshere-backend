import { inject, injectable } from "inversify";
import { NoteGroup } from "../../../entities/noteGroup";
import { NoteGroupSpecification } from "../../../specifications/noteGroupSpecification/noteGroup.specification";
import { TYPES } from "../../../types";
import { GetNoteGroupValidator } from "../../../validators/noteGroupValidator/get.noteGroup.validator";
import { BaseUseCase } from "../../baseUseCase/base.usecase";
import { GetNoteGroupRequest } from "./get.noteGroup.request";
import { IGetNoteGroupUseCase } from "./iget.noteGroup.usecase";

@injectable()
export class GetNoteGroupUseCase
  extends BaseUseCase<
    NoteGroupSpecification,
    GetNoteGroupRequest,
    NoteGroup,
    GetNoteGroupValidator
  >
  implements IGetNoteGroupUseCase {
  constructor(
    @inject(TYPES.NOTE_GROUP.IGetNoteGroupUseCase)
    userSpecification: NoteGroupSpecification,
    @inject(TYPES.NOTE_GROUP.VALIDATOR.IGetNoteGroupValidator)
    noteGroupSpecification: GetNoteGroupValidator
  ) {
    super(userSpecification, noteGroupSpecification);
  }

  protected async execute(): Promise<NoteGroup | null> {
    const entityGet = await this._specification.get(this._request.id);
    return entityGet;
  }
}
