import { Container } from "inversify";
import { TYPES } from "../src/types";
import { IUserSpecification } from "./specifications/userSpecification/iuser.specification";
import { UserSpecification } from "./specifications/userSpecification/user.specification";
import { AuthUseCase } from "./useCases/authUseCase/auth.usecase";
import { IAuthUseCase } from "./useCases/authUseCase/iauth.usecase";
import { CreateUserUseCase } from "./useCases/userUseCase/createUserUseCase/create.user.usecase";
import { ICreateUserUseCase } from "./useCases/userUseCase/createUserUseCase/icreate.user.usecase";

export class InvesifyConfig {
  public _container: Container;

  constructor() {
    this._container = new Container();

    this.bindToUser();
    this.bindToAuth();
  }

  private bindToUser() {
    this._container
      .bind<ICreateUserUseCase>(TYPES.USER.ICreateUserUseCase)
      .to(CreateUserUseCase);
    this._container
      .bind<IUserSpecification>(TYPES.USER.IUserSpecification)
      .to(UserSpecification);
  }

  private bindToAuth() {
    this._container
      .bind<IAuthUseCase>(TYPES.AUTH.IAuthUserUseCase)
      .to(AuthUseCase);
  }
}
