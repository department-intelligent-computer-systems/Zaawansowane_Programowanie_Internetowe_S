class Blog {
    private _id:number;
    private _name:string;
    private _author:Author;
    private _articles:Article[];
    private static _objectCounter:number = 0;

    constructor(name:string, author:Author) {
        this._id = Blog._objectCounter;
        Blog._objectCounter++;

        this._name = name;
        this._author = author;
    }

    public addArticle(article:Article) {
        this._articles.push(article);
    }

    public getArticleTitles() {
        let titles:string[] = [];

        for (let i = 0; i < this._articles.length; i++) {
            titles.push(this._articles[i].getTitle());
        }

        return titles;
    }

    public getArticle(title:string) {
        for (let i = 0; i < this._articles.length; i++) {
            if (this._articles[i].getTitle() === title) {
                return this._articles[i];
            }
        }

        return null;
    }
}