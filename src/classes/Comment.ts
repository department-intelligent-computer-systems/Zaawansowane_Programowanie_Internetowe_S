class Comment {
    constructor(private _content:string,
                private _date:Date,
                private _replies: Comment[],
                private _nick:string){}

    public addReply(comment:Comment):void {
        this._replies.push(comment);
    }

    public getReplies(): Comment[] {
        return this._replies;
    }            
}