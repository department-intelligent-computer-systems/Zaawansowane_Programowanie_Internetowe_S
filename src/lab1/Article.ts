export class Article{
    private _id: number;
    private _title: string;
    private _content: string;
    private _creationDate: Date;
    private _comments: Comment[];
    static _objectCounter: number;
    titile: any;

    constructor(id: number, title: string, content: string, creationDate: Date, comments: Comment[], objectCounter:number ){
        this._id = id;
        this._title = title;
        this._content = content;
        this._creationDate = creationDate;
        this._comments = comments;

    }

    public addComment(): void {return this._addComment;}
    public getComment():Comment[]{return this._getComments;}
}