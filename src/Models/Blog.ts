import { Article } from "./Article";
import { Author } from "./Author";

export class Blog {
private _id: number;
private _name: string;
private _author: Author;
private _articles: Article[];
private static _objectCounter:number = 0;


constructor(id:number, name:string, author:Author, articles:Article[]){
this._id = id;
this._name = name;
this._author = author;
this._articles = articles;
Blog._objectCounter++;
}

get id():number { return this._id;}

    get name():string { return this._name;}
    set name(value:string) { this._name = this.name; }

    get author():Author { return this._author;}
    set author(value:Author) { this._author = this.author; }

    get articles():Article[] { return this._articles;}
    set articles(value:Article[]) { this._articles = this.articles; }

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