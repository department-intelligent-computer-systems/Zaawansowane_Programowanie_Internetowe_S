export class Author {
    private _id: number;
    @required()
    private _firstname: string;
    @required()
    private _lastname: string;
    @required()
    @validate([{
        validator: (email: string) => {
            const mailExpr: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            return mailExpr.test(email);
        },
        message: 'Format maila jest niepoprawny'
    }])
    private _email: string;
    private static _objectCounter: number;

    constructor(id: number, firstname: string, lastname: string, 
            email: string){
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
    }
}