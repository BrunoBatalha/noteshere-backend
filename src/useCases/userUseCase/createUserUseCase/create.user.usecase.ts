import { inject, injectable } from "inversify";
import { User } from "../../../entities/user";
import { UserSpecification } from "../../../specifications/userSpecification/user.specification";
import { TYPES } from "../../../types";
import { BaseUseCase } from "../../baseUseCase/base.usecase";
import { CreateUserRequest } from "./create.user.request";
import { ICreateUserUseCase } from "./icreate.user.usecase";

@injectable()
export class CreateUserUseCase
  extends BaseUseCase<UserSpecification>
  implements ICreateUserUseCase {
  constructor(
    @inject(TYPES.USER.IUserSpecification)
    userSpecification: UserSpecification
  ) {
    super(userSpecification);
  }

  public async execute(request: CreateUserRequest): Promise<User> {
    const entityCreated = await this._specification.create(
      request.username,
      request.password
    );
    return entityCreated;
  }
}
