class Author {
    private _id:number;
    private _firstName:string;
    private _lastName:string;
    private _email:string;
    private static _objectCounter:number = 0;

    constructor(firstName:string, lastName:string, email:string) {
        this._id = Author._objectCounter;
        Author._objectCounter++;

        this._firstName = firstName;
        this._lastName = lastName;

        if (/^\S+@\S+\.\S+$/.test(email)) {
            this._email = email;
        }
        else {
            throw "Invalid email address";
        }
    }
}