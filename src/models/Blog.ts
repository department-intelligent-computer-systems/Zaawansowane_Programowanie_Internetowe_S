import { required } from "../functions/Functions";
import { Article } from "./Article";
import { Author } from "./Author";

export class Blog {
    private _id:number;
    @required
    private _name:string; 
    @required
    private _author:Author;
    private _articles:Article[];
    private static _objectCounter:number;

    constructor(id:number, name: string,
         author: Author,content: string){
        this._id = id;
        this._name = name;
        this._author = author;
        Blog._objectCounter = Blog._objectCounter + 1;
    }

    addArticle(article: Article):void {
        this._articles.push(article);
    }
    getArticleTitles(): string[] {
        return this._articles.map(article => article.title);
    }
    ggetArticle(article_id: number): Article | undefined {
        return this._articles.find(article => article.id === article_id);
    }
}
