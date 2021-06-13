import { IBaseRequest } from "../../baseUseCase/ibase.request";

export class CreateNoteRequest implements IBaseRequest {
  public idNoteGroup!: number;
  public title!: string;
  public content: string;

  constructor(idNoteGroup: number, title: string, content: string) {
    this.idNoteGroup = idNoteGroup;
    this.title = title;
    this.content = content;
  }
}
