import { inject, injectable } from "inversify";
import { User } from "../../entities/user";
import { TYPES } from "../../types";
import { CreateUserRequest } from "./createUserUseCase/create.user.request";
import { CreateUserUseCase } from "./createUserUseCase/create.user.usecase";
import { IUserUseCase } from "./iuser.usecase";

@injectable()
export class UserUseCase implements IUserUseCase {
  constructor(
    @inject(TYPES.USER.ICreateUserUseCase)
    private _createUserUseCase: CreateUserUseCase
  ) {}

  public async create(request: CreateUserRequest): Promise<User> {
    const response: User = await this._createUserUseCase.process(request);
    return response;
  }
}
