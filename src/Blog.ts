import Article from "./Article";
import Author from "./Author";
import { required } from "./decorators/required";

export default class Blog {
  private _id: number;
  private _name: string;
  @required
  private _author: Author;
  private _articles: Article[];
  private static _objectCounter: number;

  constructor(id: number, name: string, author: Author, articles: Article[]) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._articles = articles;
  }
  addArticles(): void {}
  getArticleTitles(): String[] {
    return this._articles.map((x) => x.title);
  }
}
