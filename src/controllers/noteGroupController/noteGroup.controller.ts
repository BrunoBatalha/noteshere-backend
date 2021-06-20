import { inject } from "inversify";
import { controller, httpGet, httpPost, interfaces } from "inversify-express-utils";
import { Request, Response } from "express";
import { TYPES } from "../../types";
import { INoteGroupController } from "./inoteGroup.controller";
import { NoteGroupUseCase } from "../../useCases/noteGroupUseCase/noteGroup.useCase";
import { GetNoteGroupRequest } from "../../useCases/noteGroupUseCase/getNoteGroupUseCase/get.noteGroup.request";

@controller("/noteGroup")
export class NoteGroupController
  implements interfaces.Controller, INoteGroupController {
  constructor(
    @inject(TYPES.NOTE_GROUP.INoteGroupUseCase)
    private _noteGroupUseCase: NoteGroupUseCase
  ) {}

  @httpPost("")
  public async createNoteGroup(req: Request, res: Response) {
    const response = await this._noteGroupUseCase.create(req.body);
    return res.json(response);
  }
  
  @httpGet(":noteGroupId")
  public async getNoteGroup(req: Request, res: Response) {
    const request = new GetNoteGroupRequest(req.params.id)
    const response = await this._noteGroupUseCase.get(request);
    return res.json(response);
  }

  @httpPost("")
  public async createNote(req: Request, res: Response) {
    const response = await this._noteGroupUseCase.create(req.body);
    return res.json(response);
  }
}
