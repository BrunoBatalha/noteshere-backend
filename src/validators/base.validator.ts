import { IBaseRequest } from "../useCases/baseUseCase/ibase.request";

export abstract class BaseValidator {

  public _validations:Array<string>;

  public abstract validate(request: IBaseRequest): void;
}
