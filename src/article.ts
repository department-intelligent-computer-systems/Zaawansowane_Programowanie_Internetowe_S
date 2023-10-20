
class Article {
    _id: number;
    _title: string;
    _content: string;
    _creationDate: Date;
    _comments: MyComment[];
    static objectCounter: number;

    constructor(id: number, title: string, content: string, creationDate: Date, comments: MyComment[]) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._creationDate = creationDate;
        this._comments = comments;
    }

    get title():string { return this._title;}

    // public addComment(comment: Comment): void {
    //   this._comments.push(comment);
    // }
  
    // public getComments(): Comment[] {
    //   return this._comments;
    // }
}