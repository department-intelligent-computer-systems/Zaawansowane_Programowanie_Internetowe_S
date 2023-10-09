import required from "../src/required";

class Author{
    private _id:number;
    @required
    private _firstname:string;
    private _lastname:string;
    private _email:string;
    static _objectCounter:number;
   
}