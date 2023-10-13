export class Coment {
    _content: string;
    _date: Date;
    _replies: Coment[];
    _nick: string;

    constructor(content:string, date:Date, replies:Coment[], nick:string) {
        this._content = content;
        this._date = date;
        this._replies = replies;
        this._nick = nick
    }
}