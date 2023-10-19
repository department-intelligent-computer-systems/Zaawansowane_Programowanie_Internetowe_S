import { required,isValidEmail } from "./decoratos";
export class Author {
  private _id: number;
   @required
  private _firstname: string;
   @required
  private _lastname: string;
   @required
  @isValidEmail
  private _email: string;

  private static _objectCounter: number = 0;

  constructor(firstname: string, lastname: string, email: string, id?: number) {
    this._id = id || Author._objectCounter + 1; // Jeśli nie podano id, użyj wartości licznika
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    Author._objectCounter++;
  }
  get firstname(): string {
    return this._firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  get email(): string {
    return this._email;
  }
  public getAuthor(): string {
    return `${this._firstname} ${this._lastname} - ${this._email}`;
  }
}



