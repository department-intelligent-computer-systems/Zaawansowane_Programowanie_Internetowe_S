import required from "./required";

export class Author {
    private _id: number;
    @required("Pole imię nie może być puste")
    private _firstname: string;
    private _lastname: string;
    private _email: Date;
    static _objectCounter: number;

    constructor(id:number, firstname:string, lastname:string, email:Date, objectCounter:number){
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
    }

}