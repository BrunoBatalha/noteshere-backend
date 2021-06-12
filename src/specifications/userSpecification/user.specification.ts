import { injectable } from "inversify";
import { User } from "../../entities/user";
import { IUserSpecification } from "./iuser.specification";

@injectable()
export class UserSpecification implements IUserSpecification {
  public async create(username: string, password: string): Promise<User> {
    return await User.create<User>({ username, password });
  }

  // TODO: refatorar
  public async login(username: string, password: string): Promise<boolean> {
    const user: User | null = await User.findOne<User>({
      where: { username, password },
    });
    return user !== null;
  }

  // TODO:  COLOCAR regra de negocio de deixar tudo maiusculo aq no specification,
  // TODO: apenas para aprender
}
