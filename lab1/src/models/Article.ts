import { Comment } from "./Comment";

export class Article{
    _id: number 
    _title:string
    _content: string
    _creationDate: Date
    _comments: Comment[]
    static _objectCounter: number

    constructor(_title: string, _content: string, _creationDate: Date, _comments: Comment[]) {
        this._id = Article._objectCounter;
        Article._objectCounter++
        this._title = _title;
        this._content= _content;
        this._creationDate= _creationDate;
        this._comments= _comments;
    }

    get id():number { return this._id;}
    get title():string { return this._title;}
    set title(value:string) { this._title = value; }

    public addComment(comment:Comment):void {
        this._comments.push(comment)
    }

    public getComments():Comment[] {
        return this._comments
    }
}