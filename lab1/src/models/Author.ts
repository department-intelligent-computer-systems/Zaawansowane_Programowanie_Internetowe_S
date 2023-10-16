export class Author{
    _id: number 
    _firstname:string
    _lastname: string
    _email: string
    static _objectCounter: number

    constructor(_firstname: string, _lastname: string, _email: string) {
        this._id = Author._objectCounter;
        Author._objectCounter++
        this._firstname = _firstname;
        this._lastname= _lastname;
        this._email= _email;
    }

}