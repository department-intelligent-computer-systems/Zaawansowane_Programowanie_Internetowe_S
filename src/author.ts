export class Author {
    private _id:number;
    private _firstname:string;
    private _lastame:string;
    private _email:string;
    private static _objectCounter:number;

    constructor(id:number, firstname:string, lastname:string, email:string){
        this._id=id;
        this._firstname=firstname;
        this._lastame=lastname;
        this._email=email;
    }
}