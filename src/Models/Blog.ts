class  Blog {
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
}