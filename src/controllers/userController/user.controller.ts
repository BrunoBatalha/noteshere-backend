import { inject } from "inversify";
import {
  controller,
  httpGet,
  httpPost,
  interfaces,
} from "inversify-express-utils";
import { Request, Response } from "express";
import { TYPES } from "../../types";
import { IUserController } from "./iuser.controller";
import { CreateUserUseCase } from "../../useCases/userUseCase/createUserUseCase/create.user.usecase";

@controller("/users")
export class UserController implements interfaces.Controller, IUserController {
  constructor(
    @inject(TYPES.USER.ICreateUserUseCase)
    private _createUserUserCase: CreateUserUseCase
  ) {}

  @httpPost("")
  public async createUser(req: Request, res: Response) {
    const response = await this._createUserUserCase.execute(req.body);
    return res.json(response);
  } 
}
