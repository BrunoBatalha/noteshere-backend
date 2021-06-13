import { injectable } from "inversify";
import { CreateNoteGroupRequest } from "../../useCases/noteGroupUseCase/createNoteGroupUseCase/create.noteGroup.request";
import { BaseValidator } from "../base.validator";
import { ICreateNoteGroupValidator } from "./icreate.noteGroup.validator";

@injectable()
export class CreateNoteGroupValidator
  extends BaseValidator
  implements ICreateNoteGroupValidator {
  public validate(request: CreateNoteGroupRequest): void {
    if (!request.title) {
      this._validations.push("Título obrigatório");
    }
  }
}
