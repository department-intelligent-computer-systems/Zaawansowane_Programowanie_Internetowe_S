


export class Comment {
    private _content:string;
    private _date: Date; 
    private _replies:Comment[];
    private _nick:string;


    constructor(id:number, content: string,nick: string){
        this._content = content;
        this._date = new Date();
        this._nick = nick;
    }

    addReply():void {}
    // getReplies(): Comment[] { }
    
}
