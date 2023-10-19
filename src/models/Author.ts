import { required } from "../functions/Functions";

export class Author{
    private _id:number;
    @required
    private _firstname:string;
    @required
    private _lastname:string;
    @required
    private _email:string;
    private static _objectCounter: number;

    constructor(id:number,firstname: string, lastname: string, email:string){
        this._id=id;
        this._firstname=firstname;
        this._lastname=lastname;
        this._email=email;
    }

    get firstname():string {return this._firstname}
    get lastname():string {return this._lastname}
    get email():string {return this._email}
}