import { injectable } from "inversify";
import { BaseEntity } from "../../entities/base.entity";
import { BaseSpecification } from "../../specifications/base.specification";
import { IBaseRequest } from "./ibase.request";

@injectable()
export abstract class BaseUseCase<ISpecification extends BaseSpecification> {
  protected _specification: ISpecification;

  constructor(iSpecification: ISpecification) {
    this._specification = iSpecification;
  }

  abstract execute(request: IBaseRequest): Promise<BaseEntity>;
}
