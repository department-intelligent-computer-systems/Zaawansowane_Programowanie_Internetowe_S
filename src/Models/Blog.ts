class Blog {
    private _id:number;
    private _name:string;
    private _author:Author;
    private _articles:Article[];
    private static _objectCounter:number;

    constructor(id:number, firstName:string, author:Author, articles:Article[]) {
        this._id = id;
        this._name = firstName;
        this._author = author;
        this._articles = articles;
    }

    addArticle(article:Article) : void{
        this._articles.push(article);
    }

    getArticleTitles() : string[]{
        return this._articles.map(x => x.title);
    }

    getArticles() : Article[]{
        return this._articles;
    }
}