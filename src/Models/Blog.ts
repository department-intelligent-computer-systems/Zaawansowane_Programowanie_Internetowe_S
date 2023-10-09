class Blog {
    private _id: number;
    private _name: string;
    private _author: Author;
    private _articles: Article[];
    private static static_objectCounter: number = 0;

    constructor(id: number, name: string, author: Author) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._articles = [];
        Blog.static_objectCounter++;
    }

    public addArticle(article: Article): void {
        this._articles.push(article);
    }

    public getArticleTitles(): string[] {
        return this._articles.map((article) => article.getTitle());
    }

    public getArticle(): Article {
        return this._articles[0];
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get author(): Author {
        return this._author;
    }

    public set author(author: Author) {
        this._author = author;
    }

    public get articles(): Article[] {
        return this._articles;
    }

    public set articles(articles: Article[]) {
        this._articles = articles;
    }

    public get staticObjectCounter(): number {
        return Blog.static_objectCounter;
    }

}
