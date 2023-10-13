class UserComment {
    private _content:string;
    private _date:Date;
    private _replies:UserComment[]
    private _nick:string;

    constructor(content:string, date:Date, replies:UserComment[], nick:string) {
        this._content = content;
        this._date = date;
        this._replies = replies;
        this._nick = nick;
    }

    addReply(reply:UserComment) : void{
        this._replies.push(reply);
    }

    getReplies() : UserComment[]{
        return this._replies;
    }
}