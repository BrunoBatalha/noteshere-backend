import { injectable } from "inversify";
import { CreateUserRequest } from "../../useCases/userUseCase/createUserUseCase/create.user.request";
import { BaseValidator } from "../base.validator";
import { ICreateUserValidator } from "./icreate.user.validator";

@injectable()
export class CreateUserValidator
  extends BaseValidator
  implements ICreateUserValidator {
  public validate(request: CreateUserRequest): void {
    if (!request.username) {
      this._validations.push("Username obrigatório.");
      return;
    }
    if (!request.password) {
      this._validations.push("Password obrigatório.");
    }
  }
}
