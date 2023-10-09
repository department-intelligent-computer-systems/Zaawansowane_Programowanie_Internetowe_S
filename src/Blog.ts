class Blog{
    private _id:number;
    private _name:string;
    private _author: Author;
    private _articles: Article[];
    private static _objectCounter: number;

    public addArticle(article: Article): void{
        this._articles.push(article);
    }

    public getArticleTitles(): string[] {
        return this._articles.map((article)=>article.title)
    }

    public getArticle(): Article{ 
        return this._articles[this._id];
    }
}