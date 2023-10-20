import DataRetrievalStrategyFactory from "./DataRetrievalStrategyFactory";
import { required } from "./decorators/required";

export interface DataRetrievalStrategy {
  retrieveData(authors: Author[]): any;
}

export default class Author {
  private _id: number;
  public getid(): number {
    return this._id;
  }
  public setid(value: number) {
    this._id = value;
  }
  @required
  private _firstName: string;
  public getfirstName(): string {
    return this._firstName;
  }
  public setfirstName(value: string) {
    this._firstName = value;
  }
  private _lastName: string;
  public getlastName(): string {
    return this._lastName;
  }
  public setlastName(value: string) {
    this._lastName = value;
  }
  private _email: string;
  public getemail(): string {
    return this._email;
  }
  public setemail(value: string) {
    this._email = value;
  }
  private static _objectCounter: number;

  constructor(id: number, firstName: string, lastName: string, email: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }

  static retrieveData(authors: Author[], strategyType: string): string {
    const strategyFactory = new DataRetrievalStrategyFactory();
    const strategy = strategyFactory.createStrategy(strategyType);
    return strategy.retrieveData(authors);
  }
}
