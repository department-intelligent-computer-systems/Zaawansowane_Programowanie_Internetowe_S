import { required } from "../functions/Functions";
import { Comment } from "./Comment";

export class Article {
    private _id:number;
    @required
    private _title:string; 
    private _content:string;
    private _creationDate: Date;
    private _comments:Comment[];
    private static _objectCounter:number;

    constructor(id:number, title: string,content: string){
        this._id = id;
        this._title = title;
        this._content = content;
        this._creationDate = new Date();
    }

    get id():number { return this._id;}
    get title():string { return this._title;}

    addComment(comment: Comment): void {
        this._comments.push(comment);
    }
    getComments(): Comment[] { return this._comments; }
    
}
