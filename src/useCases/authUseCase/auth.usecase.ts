import { injectable, inject } from "inversify";
import { UserSpecification } from "../../specifications/userSpecification/user.specification";
import { TYPES } from "../../types";
import { AuthRequest } from "./auth.request";
import { IAuthUseCase } from "./iauth.usecase";

@injectable()
export class AuthUseCase implements IAuthUseCase {
  constructor(
    @inject(TYPES.USER.IUserSpecification)
    private _userSpecification: UserSpecification
  ) {}

  public async login(request: AuthRequest): Promise<boolean> {
    const isSuccessLogin = await this._userSpecification.login(
      request.username,
      request.password
    );
    return isSuccessLogin;
  }
}
