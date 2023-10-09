class Article{
    private _id: number;
    private _title: string;
    private _content: string;
    private _creationDate: Date;
    private _comments: Coment[];
    private static _objectCounter: number;

    get title(): string {return this._title}

    public addComment(comment: Coment): void{
        this._comments.push(comment);
    }

    public getComments(): Coment[]{
        return this._comments.map((com)=>com);
    }
    
}