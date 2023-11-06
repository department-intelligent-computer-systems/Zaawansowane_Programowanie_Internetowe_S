import { Comment } from "./Comment";
import { currentDate, required } from "../required";

export class Article{
    private _id: number;
    @required("Pole tytuł nie może być puste")
    private _title: string;
    private _content: string;
    @currentDate("W momencie tworzenia data powinna być ustalona na aktualną")
    private _creationDate: Date;
    private _comments: Comment[] = [];
    private static _objectCounter: number;

    constructor(id:number, title:string, content:string, creationDate:Date, comments:Comment[]){
        this._id=id;
        this._title=title;
        this._content=content;
        this._creationDate=creationDate;
        this._comments=comments;
    }

    get title(): string {return this._title}

    public addComment(comment: Comment): void{
        this._comments.push(comment);
    }

    public getComments(): Comment[]{
        return this._comments;
    }
    
}