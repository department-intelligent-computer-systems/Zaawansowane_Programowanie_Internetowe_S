class Article{

    static _objectCounter:number;

    constructor(private _id:number,
                private _title:string,
                private _creationDate:Date,
                private _coments:Coment[]){}

    get title():string{return this._title}

    public addComent(coment:Coment):void{
        this._coments.push(coment);
    }

    // public getComents():Coment[]{
        
    // }
}