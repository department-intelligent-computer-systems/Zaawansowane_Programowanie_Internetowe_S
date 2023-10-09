export class Comment{
    private _content: string;
    private _date: Date;
    private _replies: Comment[];
    private _nick: string;


    constructor(content: string, date: Date, replies: Comment[], nick: string){
        this._content = content;
        this._date = date;
        this._replies = replies;
        this._nick = nick;
    }

    get content():string { return this._content;}
    set content(value:string) { this._content = this.content; }

    get date():Date { return this._date;}
    set date(value:Date) { this._date = this.date; }

    get replies():Comment[] { return this._replies;}
    set replies(value:Comment[]) { this._replies = this.replies; }

    get nick():string { return this._nick;}
    set nick(value:string) { this._nick = this.nick; }

    public addReply(reply: Comment): void {
        this._replies.push(reply);
    }
    
    public getReplies(): Comment[] {
        return this._replies;
    }
}