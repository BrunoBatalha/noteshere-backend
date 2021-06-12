import { IBaseRequest } from "../../baseUseCase/ibase.request";

export class CreateUserRequest implements IBaseRequest{
  public username!: string;
  public password!: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
