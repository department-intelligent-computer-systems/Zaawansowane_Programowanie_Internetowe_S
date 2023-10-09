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

    public set id(value: number) {
        this._id = value;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get content(): string {
        return this._content;
    }

    public set content(value: string) {
        this._content = value;
    }

    public get creationDate(): Date {
        return this._creationDate;
    }

    public set creationDate(value: Date) {
        this._creationDate = value;
    }
}
