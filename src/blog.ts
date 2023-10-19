import { notEmpty, required } from "./decoratos";
import { Author } from "./author";
import { Article } from "./article";
class Blog {
    private _id: number;
    @notEmpty("Nazwa nie może być pusta")
    private _name: string;
    @required
    private _author: Author;
    private _articles: Article[];
    private static _objectCounter: number = 0;
  
    constructor(id: number, name: string, author: Author) {
      if (!name || !author) {
        throw new Error("Nazwa bloga i autor są wymagane");
      }
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
  


