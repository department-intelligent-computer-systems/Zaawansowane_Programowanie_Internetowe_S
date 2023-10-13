class MyComment {
    _content: string;
    _date: Date;
    _replies: MyComment[];
    _nick: string;

    constructor(content: string, date: Date, replies: MyComment[], nick: string) {
        this._content = content;
        this._date = date;
        this._replies = replies;
        this._nick = nick;
    }

    public addReply(mycomment: MyComment): void {
        this._replies.push(mycomment);
    }

}