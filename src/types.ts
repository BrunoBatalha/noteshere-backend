const TYPES = {
  USER: {
    ICreateUserUseCase: Symbol("ICreateUserUseCase"),
    IUserSpecification: Symbol("IUserSpecification"),
  },
  AUTH: {
    IAuthUserUseCase: Symbol("IAuthUserUseCase"),
  },
  NOTE_GROUP: {
    INoteGroupUseCase: Symbol("INoteGroupUseCase"),
    ICreateNoteGroupUseCase: Symbol("ICreateNoteGroupUseCase"),
    INoteGroupSpecification: Symbol("INoteGroupSpecification"),
  },
  NOTE: {
    INoteSpecification: Symbol("INoteSpecification"),
    INoteUseCase: Symbol("INoteUseCase"),
    ICreateNoteUseCase: Symbol("ICreateNoteUseCase"),
  },
};

export { TYPES };
