import { BaseEntity } from "../../entities/base.entity";
import { BaseSpecification } from "../../specifications/base.specification";
import { BaseValidator } from "../../validators/base.validator";
import { IBaseRequest } from "./ibase.request";
import { IBaseUseCase } from "./ibase.usecase";

export abstract class BaseUseCase<
  TSpecification extends BaseSpecification,
  TBaseRequest extends IBaseRequest,
  TEntity extends BaseEntity,
  TValidator extends BaseValidator
> implements IBaseUseCase {
  protected _specification: TSpecification;
  protected _request: TBaseRequest;
  private _validator: TValidator;

  constructor(tSpecification: TSpecification, tValidator: TValidator) {
    this._specification = tSpecification;
    this._validator = tValidator;
  }

  protected abstract execute(): Promise<TEntity>;

  public process(request: TBaseRequest): Promise<TEntity> {
    this._request = request;

    this._validator.validate(request);
    if (this._validator._validations.length > 0) {
      throw this._validator._validations;
    }

    return this.execute();
  }
}
