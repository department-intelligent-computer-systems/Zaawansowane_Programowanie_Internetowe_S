class Author {
    private _id: number;
    private _firstname: string;
    private _lastname: string;
    private _email: string;
    private static static_objectCounter: number = 0;
  
    constructor(id: number, firstname: string, lastname: string, email: string) {
      this._id = id;
      this._firstname = firstname;
      this._lastname = lastname;
      this._email = email;
      Author.static_objectCounter++;
    }
  }
  