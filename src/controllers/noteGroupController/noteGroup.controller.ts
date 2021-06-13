import { inject } from "inversify";
import { controller, httpPost, interfaces } from "inversify-express-utils";
import { Request, Response } from "express";
import { TYPES } from "../../types";
import { INoteGroupController } from "./inoteGroup.controller";
import { NoteGroupUseCase } from "../../useCases/noteGroupUseCase/noteGroup.useCase";

@controller("/users")
export class NoteGroupController
  implements interfaces.Controller, INoteGroupController {
  constructor(
    @inject(TYPES.NOTE_GROUP.INoteGroupUseCase)
    private _noteGroupUserCase: NoteGroupUseCase
  ) {}

  @httpPost("")
  public async createNoteGroup(req: Request, res: Response) {
    const response = await this._noteGroupUserCase.create(req.body);
    return res.json(response);
  }
}
