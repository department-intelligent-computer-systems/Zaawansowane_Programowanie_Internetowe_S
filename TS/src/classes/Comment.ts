class BlogComment {
    private _content:string;
    private _date:Date;
    private _replies:BlogComment[];
    private _nick:string;

    constructor(content:string, date:Date, nick:string) {
        this._content = content;
        this._date = date;
        this._nick = nick;

        this._replies = [];
    }

    public addReply(comment:BlogComment) {
        this._replies.push(comment);
    }

    public getReplies() {
        return this._replies;
    }
}