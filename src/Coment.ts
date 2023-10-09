class Coment{
    private _content: string;
    private _date: Date;
    private _replies: Coment[];
    private _nick: string;

    public addReply(rep: Coment): void{
        this._replies.push(rep);
    }

    public getReplies(): Coment[]{
        return this._replies.map((rep)=>rep);
    }

}