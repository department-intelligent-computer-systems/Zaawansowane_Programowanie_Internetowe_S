import { emailValid, required } from "./Decorators";
export class Author {
  private _id: number;
  @required("To pole jest wymagane")
  private _firstname: string;
  @required("To pole jest wymagane")
  private _lastname: string;
  @emailValid("Niepoprawny adres email")
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

