import { Coment } from "./Comment";
import { validate } from "../Validations";
export class Article{

    private _id:number;
    @validate([{
        validator: (title: string) => {
            if (!title || title.trim() === '') {
                return false; 
            }
            return true; 
        },
        message: "Title cannot be be empty or contain only whitespace.",
    },
    ])
    private _title:string;
    private _content: string;
    private _creationDate:Date;
    private _coments:Coment[];
    static _objectCounter:number;

    constructor(id:number,title:string,content:string,coments: Coment[]){
        this._id = id;
        this._title = title;
        this._content = content;
        this._creationDate = new Date();
        this._coments = coments
    }

    get id():number{return this._id}
    get title():string{return this._title}

    public addComent(coment:Coment):void{
        this._coments.push(coment);
    }

     public getComents():Coment[]{
        return this._coments;
     }
}