export class Commentu{
    private _content: string;
    private _date : Date;
    private _replies: Commentu[];
    private _nick: string;
    constructor(content:string,date:Date,replies:Commentu[],nick:string){
        this._content = content;
        this._date = date;
        this._replies = replies;
        this._nick = nick;
    }
    public addReply(replies:Commentu):void {
        this._replies.push(replies);
    }
    public getReplies():Commentu[]{
        return this._replies;
    }
}