export class Comment{
    _id: number 
    _content:string
    _creatioDate: Date
    _replies: Comment[]
    _nick:string
    static _objectCounter: number

    constructor(
            _content:string,
            _creatioDate: Date,
            _replies: Comment[],
            _nick:string
        ) {
        this._id = Comment._objectCounter;
        Comment._objectCounter++
        this._content = _content;
        this._creatioDate= _creatioDate;
        this._replies= _replies;
        this._nick= _nick;
    }

    public addReply(reply: Comment):void {
        this._replies.push(reply)
    }

    public getReplies():Comment[] {
        return this._replies
    }

}