import { Container } from "inversify";
import { TYPES } from "../src/types";
import { INoteGroupSpecification } from "./specifications/noteGroupSpecification/inoteGroup.specification";
import { NoteGroupSpecification } from "./specifications/noteGroupSpecification/noteGroup.specification";
import { INoteSpecification } from "./specifications/noteSpecification/inote.specification";
import { NoteSpecification } from "./specifications/noteSpecification/note.specification";
import { IUserSpecification } from "./specifications/userSpecification/iuser.specification";
import { UserSpecification } from "./specifications/userSpecification/user.specification";
import { AuthUseCase } from "./useCases/authUseCase/auth.usecase";
import { IAuthUseCase } from "./useCases/authUseCase/iauth.usecase";
import { CreateNoteGroupUseCase } from "./useCases/noteGroupUseCase/createNoteGroupUseCase/create.noteGroup.usecase";
import { ICreateNoteGroupUseCase } from "./useCases/noteGroupUseCase/createNoteGroupUseCase/icreate.noteGroup.usecase";
import { INoteGroupUseCase } from "./useCases/noteGroupUseCase/inoteGroup.usecase";
import { NoteGroupUseCase } from "./useCases/noteGroupUseCase/noteGroup.useCase";
import { CreateNoteUseCase } from "./useCases/noteUseCase/createNoteUseCase/create.note.usecase";
import { ICreateNoteUseCase } from "./useCases/noteUseCase/createNoteUseCase/icreate.note.usecase";
import { INoteUseCase } from "./useCases/noteUseCase/inote.usecase";
import { NoteUseCase } from "./useCases/noteUseCase/note.usecase";
import { CreateUserUseCase } from "./useCases/userUseCase/createUserUseCase/create.user.usecase";
import { ICreateUserUseCase } from "./useCases/userUseCase/createUserUseCase/icreate.user.usecase";
import { IUserUseCase } from "./useCases/userUseCase/iuser.usecase";
import { UserUseCase } from "./useCases/userUseCase/user.usecase";
import { CreateNoteGroupValidator } from "./validators/noteGroupValidator/create.noteGroup.validator";
import { ICreateNoteGroupValidator } from "./validators/noteGroupValidator/icreate.noteGroup.validator";
import { CreateNoteValidator } from "./validators/noteValidator/create.note.validator";
import { ICreateNoteValidator } from "./validators/noteValidator/icreate.note.validator";
import { CreateUserValidator } from "./validators/userValidator/create.user.validator";
import { ICreateUserValidator } from "./validators/userValidator/icreate.user.validator";

export class InversifyConfig {
  public _container: Container;

  constructor() {
    this._container = new Container();
    this.bindToUser();
    this.bindToAuth();
    this.bindToNoteGroup();
    this.bindToNote();
  }

  private bindToUser() {
    this._container
      .bind<IUserSpecification>(TYPES.USER.IUserSpecification)
      .to(UserSpecification);
    this._container
      .bind<ICreateUserValidator>(TYPES.USER.VALIDATOR.ICreateUserValidator)
      .to(CreateUserValidator);
    this._container.bind<IUserUseCase>(TYPES.USER.IUserUseCase).to(UserUseCase);
    this._container
      .bind<ICreateUserUseCase>(TYPES.USER.ICreateUserUseCase)
      .to(CreateUserUseCase);
  }

  private bindToAuth() {
    this._container
      .bind<IAuthUseCase>(TYPES.AUTH.IAuthUserUseCase)
      .to(AuthUseCase);
  }

  private bindToNoteGroup() {
    this._container
      .bind<INoteGroupSpecification>(TYPES.NOTE_GROUP.INoteGroupSpecification)
      .to(NoteGroupSpecification);
    this._container
      .bind<ICreateNoteGroupValidator>(
        TYPES.NOTE_GROUP.VALIDATOR.ICreateNoteGroupValidator
      )
      .to(CreateNoteGroupValidator);
    this._container
      .bind<INoteGroupUseCase>(TYPES.NOTE_GROUP.INoteGroupUseCase)
      .to(NoteGroupUseCase);
    this._container
      .bind<ICreateNoteGroupUseCase>(TYPES.NOTE_GROUP.ICreateNoteGroupUseCase)
      .to(CreateNoteGroupUseCase);
  }

  private bindToNote() {
    this._container
      .bind<INoteSpecification>(TYPES.NOTE.INoteSpecification)
      .to(NoteSpecification);
    this._container
      .bind<ICreateNoteValidator>(TYPES.NOTE.VALIDATOR.ICreateNoteValidator)
      .to(CreateNoteValidator);
    this._container.bind<INoteUseCase>(TYPES.NOTE.INoteUseCase).to(NoteUseCase);
    this._container
      .bind<ICreateNoteUseCase>(TYPES.NOTE.ICreateNoteUseCase)
      .to(CreateNoteUseCase);
  }
}
