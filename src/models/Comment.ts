export class Coment{
    private _content:string;
    private _date:Date;
    private _replies:Coment[];
    private _nick:string;

    constructor(content:string,date:Date,nick:string){
        this._content=content;
        this._date=date;
        this._replies=[];
        this._nick=nick;
    }

public addReply(coment:Coment):void{
this._replies.push(coment);
}
}