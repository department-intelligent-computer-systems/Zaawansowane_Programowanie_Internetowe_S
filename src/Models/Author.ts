import { required } from "../Decorators/RequiredDecorator";

class Author {
    private _id:number;
    @required("Pole imię nie może być puste") 
    private _firstName:string;
    @required("Pole nazwisko nie może być puste") 
    private _lastName:string;
    private _email:string;
    private static _objectCounter:number;

    constructor(id:number, firstName:string, lastName:string, email:string) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        Author._objectCounter++;
    }
}