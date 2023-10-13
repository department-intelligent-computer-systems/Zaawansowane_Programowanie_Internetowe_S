class _Comment{
    private _content:string;
    private _date:Date;
    private _replies:_Comment[];
    private _nick:string;
    public addReply(replys:_Comment):void{
        this._replies.push(replys)
    }
    public getReplies(): _Comment[] {
        return this._replies;
      }
    
}