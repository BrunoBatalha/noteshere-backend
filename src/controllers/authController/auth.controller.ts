import { inject } from "inversify";
import {
  controller,
  httpGet,
  httpPost,
  interfaces,
} from "inversify-express-utils";
import { Request, Response } from "express";
import { TYPES } from "../../types";
import { IAuthController } from "./iauth.controller";
import { AuthUseCase } from "../../useCases/authUseCase/auth.usecase";

@controller("/authentication")
export class AuthController implements interfaces.Controller, IAuthController {
  constructor(
    @inject(TYPES.AUTH.IAuthUserUseCase)
    private _authUserUseCase: AuthUseCase
  ) {}

  @httpPost("/login")
  public async login(req: Request, res: Response) {
    const response = await this._authUserUseCase.login(req.body);
    return res.json(response);
  }

  // @httpPost("/logout")
  // public async logout(req: Request, res: Response) {
  //   const response = await this._authUserUseCase.login(req.body);
  //   return res.json(response);
  // }
}
