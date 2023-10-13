import { required } from "./decorators/required";

class Author {
  private _id: number;
  @required
  private _firstName: string ;
  private _lastName: string;
  private _email: string;
  private static _objectCounter: number;

  constructor(id: number, firstName: string, lastName: string, email: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }
}