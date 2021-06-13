import { inject, injectable } from "inversify";
import { User } from "../../../entities/user";
import { UserSpecification } from "../../../specifications/userSpecification/user.specification";
import { TYPES } from "../../../types";
import { CreateUserValidator } from "../../../validators/userValidator/create.user.validator";
import { BaseUseCase } from "../../baseUseCase/base.usecase";
import { CreateUserRequest } from "./create.user.request";
import { ICreateUserUseCase } from "./icreate.user.usecase";

@injectable()
export class CreateUserUseCase
  extends BaseUseCase<
    UserSpecification,
    CreateUserRequest,
    User,
    CreateUserValidator
  >
  implements ICreateUserUseCase {
  constructor(
    @inject(TYPES.USER.IUserSpecification)
    userSpecification: UserSpecification,
    @inject(TYPES.USER.VALIDATOR.ICreateUserValidator)
    createUserValidator: CreateUserValidator
  ) {
    super(userSpecification, createUserValidator);
  }

  protected async execute(): Promise<User> {
    const entityCreated = await this._specification.create(
      this._request.username,
      this._request.password
    );
    return entityCreated;
  }
}
