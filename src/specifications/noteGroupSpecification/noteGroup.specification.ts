import { injectable } from "inversify";
import { NoteGroup } from "../../entities/noteGroup";
import { INoteGroupSpecification } from "./inoteGroupSpecification";

@injectable()
export class NoteGroupSpecification implements INoteGroupSpecification {
  public async create(title: string): Promise<NoteGroup> {
    return await NoteGroup.create<NoteGroup>({ title });
  }
}
