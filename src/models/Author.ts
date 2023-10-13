import { required, validate } from "../functions/Functions";

export class Author {
    private _id:number;
    @required
    private _firstname:string;
    @required
    private _lastname:string;
    @required
    @validate([{
        validator: (_email: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(_email);
        },
        message: "Niepoprawny adres email"
        }
    ])
    private _email:string;
    private static _objectCounter:number;

    constructor(id:number, firstname: string,lastname: string,
        email: string){
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
    } 
}

