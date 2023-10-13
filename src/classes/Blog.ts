class Blog{
    static _objectCounter:number;
    constructor(private _name:string,
                private _author:Author,
                private _id?:number,
                private _articles?:Article[]){}
    
    public addArticle(article:Article):void {
        this._articles?.push(article);
    }

    // public getArticleTiles():string[] {
    //     return this._articles.getTitle;
    // }
}