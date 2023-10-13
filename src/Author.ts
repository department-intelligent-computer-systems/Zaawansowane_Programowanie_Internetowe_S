export class Author {
    _id: number;
    _firstname: string
    _lastname: string
    _email: string
    static _objectCounter: number

    constructor(id:number, firstname:string, lastname:string, email:string) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
    }
}

