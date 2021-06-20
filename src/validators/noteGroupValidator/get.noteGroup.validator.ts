import { injectable } from "inversify";
import { GetNoteGroupRequest } from "../../useCases/noteGroupUseCase/getNoteGroupUseCase/get.noteGroup.request";
import { BaseValidator } from "../base.validator";
import { IGetNoteGroupValidator } from "./iget.noteGroup.validator";

@injectable()
export class GetNoteGroupValidator
  extends BaseValidator
  implements IGetNoteGroupValidator {
  public validate(request: GetNoteGroupRequest): void {
    if (!request.id) {
      this._validations.push("Id obrigatório");
    }
  }
}
