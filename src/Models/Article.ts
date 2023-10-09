class Article {
    private _id: number;
    private _title: string;
    private _content: string;
    private _creationDate: Date;
    private _comments: Comment[];
    private static static_objectCounter: number = 0;

    constructor(id: number, title: string, content: string, creationDate: Date) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._creationDate = creationDate;
        this._comments = [];
        Article.static_objectCounter++;
    }

    public addComment(comment: Comment): void {
        this._comments.push(comment);
    }

    public getComments(): Comment[] {
        return this._comments;
    }

    public getTitle(): string {
        return this._title;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get title(): string {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get content(): string {
        return this._content;
    }

    public set content(content: string) {
        this._content = content;
    }

    public get creationDate(): Date {
        return this._creationDate;
    }

    public set creationDate(creationDate: Date) {
        this._creationDate = creationDate;
    }

    public get comments(): Comment[] {
        return this._comments;
    }

    public set comments(comments: Comment[]) {
        this._comments = comments;
    }

    public static get staticObjectCounter(): number {
        return Article.static_objectCounter;
    }

}
