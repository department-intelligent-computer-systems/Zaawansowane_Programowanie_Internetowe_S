export class Article {
    private _id: number;
    @validate([{
        validator: (name: string) => name.length > 0,
        message: "Tytuł nie może być pusty"
    }])
    private _title: string;
    private _content: string;
    private _creationDate: Date;
    private _comments: Comment[];
    private static _objectCounter: number

    constructor(id: number, title: string, content: string, 
            comments: Comment[]){
        this._id = id;
        this._title = title;
        this._content = content;
        this._creationDate = new Date(Date.now());
        this._comments = comments;
    }

    addComment(): void {}
    getComments(): Comment[] {
        return [new Comment()];
    }
}