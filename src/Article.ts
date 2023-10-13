import { Coment } from "./Comment";

export class Article {
    _id: number;
    _title: string;
    _content: string;
    _creatioDate: Date;
    _comments: Coment[];
    static _objectCounter: number;

    constructor(id:number, title:string, content:string, creationDate:Date, comments: Coment[]) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._creatioDate = creationDate;
        this._comments = comments;
    }
}