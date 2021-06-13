const TYPES = {
  USER: {
    IUserUseCase: Symbol("IUserUseCase"),
    ICreateUserUseCase: Symbol("ICreateUserUseCase"),
    IUserSpecification: Symbol("IUserSpecification"),
    VALIDATOR: {
      ICreateUserValidator: Symbol("ICreateUserValidator"),
    },
  },

  AUTH: {
    IAuthUserUseCase: Symbol("IAuthUserUseCase"),
  },

  NOTE_GROUP: {
    INoteGroupUseCase: Symbol("INoteGroupUseCase"),
    ICreateNoteGroupUseCase: Symbol("ICreateNoteGroupUseCase"),
    INoteGroupSpecification: Symbol("INoteGroupSpecification"),
    VALIDATOR: {
      ICreateNoteGroupValidator: Symbol("ICreateNoteGroupValidator"),
    },
  },

  NOTE: {
    INoteSpecification: Symbol("INoteSpecification"),
    INoteUseCase: Symbol("INoteUseCase"),
    ICreateNoteUseCase: Symbol("ICreateNoteUseCase"),
    VALIDATOR: {
      ICreateNoteValidator: Symbol("ICreateNoteValidator"),
    },
  },
};

export { TYPES };
