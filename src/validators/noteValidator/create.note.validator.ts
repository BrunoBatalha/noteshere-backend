import { injectable } from "inversify";
import { CreateNoteRequest } from "../../useCases/noteUseCase/createNoteUseCase/create.note.request";
import { BaseValidator } from "../base.validator";
import { ICreateNoteValidator } from "./icreate.note.validator";

@injectable()
export class CreateNoteValidator
  extends BaseValidator
  implements ICreateNoteValidator {
  public validate(request: CreateNoteRequest): void {
    if (!request.title) {
      this._validations.push("Título obrigatório.");
      return;
    }
    if (!request.content) {
      this._validations.push("Conteúdo obrigatório.");
      return;
    }
    if(!request.idNoteGroup){
      this._validations.push("Grupo para nota obrigatório")
    }
  }
}
