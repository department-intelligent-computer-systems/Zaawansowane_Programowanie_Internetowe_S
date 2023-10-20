class Blog{
    private _id:number;
    private _name:string;
    private _author:Author;
    private _articles:Article[];
    private static _objectCounter:number;

    public addArticle():void{};
    public getArticleTitles():any{};
    public getArticle():Article{ return Article;};
}