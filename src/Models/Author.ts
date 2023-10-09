export class Author {
    private _id: number;
    private _firstname: string;
    private _lastname: string;
    private _email: string;
    static _obiectCounter:number = 0;
    
    
    constructor(id:number, firstname: string, lastname: string, email: string){
    this._id = id;
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    Author._obiectCounter++;
    }

    get id():number { return this._id;}

    get firstname():string { return this._firstname;}
    set firstname(value:string) { this._firstname = this.firstname; }

    get lastname():string { return this._lastname;}
    set lastname(value:string) { this._lastname = this.lastname; }

    get email():string { return this._email;}
    set email(value:string) { this._email = this.email; }
    }