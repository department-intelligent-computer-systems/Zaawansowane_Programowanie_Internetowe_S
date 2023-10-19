export class CommentCus{
    constructor(
        private _content:string,
        private _date: Date,
        private _replies:CommentCus[],
        private _nick:string
    ){}
    addReplies(comment:CommentCus):void{
        this._replies.push(comment);
    }
    getReplies():CommentCus[]{
        return this._replies;
    }
}