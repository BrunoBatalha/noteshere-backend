import { inject } from "inversify";
import { controller, httpPost, interfaces } from "inversify-express-utils";
import { Request, Response } from "express";
import { TYPES } from "../../types";
import { IUserController } from "./iuser.controller";
import { UserUseCase } from "../../useCases/userUseCase/user.usecase";

@controller("/users")
export class UserController implements interfaces.Controller, IUserController {
  constructor(
    @inject(TYPES.USER.IUserUseCase)
    private _userUseCase: UserUseCase
  ) {}

  @httpPost("")
  public async createUser(req: Request, res: Response) {
    try {
      const response = await this._userUseCase.create(req.body);
      return res.json(response);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  }
}
