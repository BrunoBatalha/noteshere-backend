import { IBaseRequest } from "../../baseUseCase/ibase.request";

export class GetNoteGroupRequest implements IBaseRequest {
  public id!: string;

  constructor(id: string) {
    this.id = id;
  }
}
