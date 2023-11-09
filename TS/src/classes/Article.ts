class Article {
    private _id:number;
    private _title:string;
    private _content:string;
    private _creationDate:Date;
    private _comments:BlogComment[];
    private static _objectCounter:number = 0;

    constructor(title:string, content:string) {        
        this._id = Article._objectCounter;
        Article._objectCounter++;

        this._title = title;
        this._content = content;
        this._creationDate = new Date();

        this._comments = [];
    }

    public getTitle() {
        return this._title;
    }

    public addComment(comment:BlogComment) {
        this._comments.push(comment);
    }

    public getComments() {
        return this._comments;
    }
}