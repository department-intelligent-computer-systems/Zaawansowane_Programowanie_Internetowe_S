class Blog {
    private _id: number;
    private _name: string;
    private _author: Author;
    private _articles: Article[];
    private static _objectCounter: number = 0;
  
    constructor(id: number, name: string, author: Author) {
      this._id = id;
      this._name = name;
      this._author = author;
      this._articles = [];
      Blog._objectCounter++;
    }
  
    public addArticle(article: Article): void {
      this._articles.push(article);
    }
  
    public getArticle(index: number): Article | undefined {
      if (index >= 0 && index < this._articles.length) {
        return this._articles[index];
      } else {
        return undefined;
      }
    }
  
    public getArticleTitle(index: number): string | undefined {
      const article = this.getArticle(index);
      return article ? article.title : undefined;
    }
  
    // Getter methods for private properties
    public get id(): number {
      return this._id;
    }
  
    public get name(): string {
      return this._name;
    }
  
    public get author(): Author {
      return this._author;
    }
  
    public get articles(): Article[] {
      return this._articles;
    }
  
    // Static method to get the number of Blog objects created
    public static getObjectCounter(): number {
      return Blog._objectCounter;
    }
  }
class Author{
private _id:number;
private _firstname:string;
private _lastname:string;
private _email:string;
private _static_objectCounter:number;


}
class Article{
    private _id:number;
    private _title:string;
    private _content:string;
    private _creationDate:Date;
    private _comments:_Comment[];
    private static_objectCounter:number;
    get title(): string {
        return this._title;
      }

      public addComments(_comments: _Comment): void {
        this._comments.push(Comment);
      }
      public getComments(index: number): _Comment | undefined {
        if (index >= 0 && index < this._comments.length) {
          return this._comments[index];
        } else {
          return undefined;
        }
      }

}
class _Comment{
    
}