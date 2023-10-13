class Author {
    static _objectCounter:number;
    private emailRegexp = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')
    constructor(private _firstname:string,
                private _lastname:string,
                private _email:string,
                private _id?:number){
                    if(this.emailRegexp.test(_email)) {
                        console.warn("mail is wrong!" + _email);
                        throw "Author._email is wrong";
                    }
                }
}