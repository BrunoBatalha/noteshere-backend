import { injectable } from "inversify";
import { NoteGroup } from "../../entities/noteGroup";
import { INoteGroupSpecification } from "./inoteGroup.specification";

@injectable()
export class NoteGroupSpecification implements INoteGroupSpecification {
  public async create(title: string): Promise<NoteGroup> {
    return await NoteGroup.create<NoteGroup>({ title });
  }
  public async get(id: string): Promise<NoteGroup | null> {
    return await NoteGroup.findByPk(id);
  }
}
