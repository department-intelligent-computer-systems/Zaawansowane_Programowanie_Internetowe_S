class Article {
    static _objectCounter:number;
    constructor(private _title:string,
                private _creationDate:Date = new Date(),
                private _id?:number,
                private _content?:string,
                private _comments?:Comment[]){}

    public addComment(comment:Comment):void {
        this._comments?.push(comment);
    }

    public getComments():Comment[]|undefined{
            return this._comments;
    }

    public getTitle():String{
        return this._title;
    }
}