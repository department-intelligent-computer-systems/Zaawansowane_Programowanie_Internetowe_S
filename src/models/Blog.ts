import { Author } from "./Author";
import { Article } from "./Article";


export class Blog {
  private _id: number;
  private _name: string;
  private _author: Author;
  private _articles: Article[];
  private static _objectCounter: number;

  constructor(id: number, name: string, author: Author) {
    this._id = id;
    this._name = name;
    this._author = author;
    Blog._objectCounter = Blog._objectCounter + 1;
  }

  addArticle(article:Article): void {
    this._articles.push(article);
  }

  getArticleTitiles(): string[] {
    return this._articles.map(article => article.title);
  }

  getArticle(article_id:number): Article | undefined{
    return this._articles.find(article => article.id === article_id);
  }
}
