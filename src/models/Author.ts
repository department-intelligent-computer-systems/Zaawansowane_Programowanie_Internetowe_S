import {required,validate} 
    from "../Validations";
export class Author{
    private _id:number;
    @required
    private _firstname:string;
    @required
    private _lastname:string;
    @required
    // @validate([{
    //     validator: (_email: string) => {
    //         const regex=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    //         return regex.test(_email);
    //     },
    //     message: "Email is not valid"
    // }])
    private _email:string;
    static _objectCounter:number;
   
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