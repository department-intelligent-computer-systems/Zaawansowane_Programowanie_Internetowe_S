
export class Author {
  private _id: number;
  
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  static _objectCounter: number;

  constructor(firstname: string, lastname: string, email: string) {
    this._id = Author._objectCounter;
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
  }

  get firstname():string { return this._firstname;}
  get lastname():string { return this._lastname;}
  get email():string { return this._email;}
}