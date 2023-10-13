class Article {
    private _id:number;
    private _title:string;
    private _content:string;
    private _creationDate:Date;
    private _comments:UserComment[];
    private static _objectCounter:number;

    constructor(id:number, title:string, content:string, creationDate:Date, comments:UserComment[]) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._creationDate = creationDate;
        this._comments = comments;
        Article._objectCounter++;
    }

    addComment(comment:UserComment) : void{
        this._comments.push(comment);
    }

    getComments() : UserComment[]{
        return this._comments;
    }

    get title() : string { 
        return this._title;
    }
}