import { Comment } from "./Comment";

export class Article{
    private _id: number;
    private _title: string;
    private _content: string;
    private _creationDate: Date;
    private _comments: Comment[];
    private static _objectCounter: number = 0;

    constructor(id:number, title:string, content:string, creationDate:Date, comments:Comment[]){
        this._id = id;
        this._title = title;
        this._content = content;
        this._creationDate = creationDate;
        this._comments = comments;
        Article._objectCounter++;
    }

    get id():number { return this._id;}

    get title():string { return this._title;}
    set title(value:string) { this._title = this.title; }

    get content():string { return this._content;}
    set content(value:string) { this._content = this.content; }

    get creationDate():Date { return this._creationDate;}
    set creationDate(value:Date) { this._creationDate = this.creationDate; }

    get coments():Comment[] { return this._comments;}
    set coments(value:Comment[]) { this._comments = this.coments; }

    public addComment(comment: Comment): void {
        this._comments.push(comment);
    }

    public getComments(): Comment[] {
        return this._comments;
    }

    public getTitle(): string {
        return this._title;
      }
}