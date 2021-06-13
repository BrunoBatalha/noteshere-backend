import { IBaseRequest } from "../../baseUseCase/ibase.request";

export class CreateNoteGroupRequest implements IBaseRequest {
  public title!: string;

  constructor(title: string) {
    this.title = title;
  }
}
