export class Author {
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private static _objectCounter: number = 0;
  constructor(id:number, firstName:string, lastName:string, email:string) {
    this._id = id;
    if(!firstName){
    console.log("Podaj imie");
    }else if(!lastName){
    console.log("Podaj nazwisko");
    }else if(!email){
    console.log("Podaj email");
    }else if(!email.includes("@")){
    console.log("Email jest niepoprawny");
    }else{
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    }
    Author._objectCounter++;
  }

  //udostępnienie parametrów prywatnych
  get firstName(): string {
    return this._firstName;
  }
  get lastName(): string {
    return this._lastName;
  }
  get email(): string {
    return this._email;
  }
}