class Coment{
    constructor(private _content:string,
        private _date:Date,
        private _replies:Coment[],
        private _nick:string){}

public addReply(coment:Coment):void{
this._replies.push(coment);
}
}