import { Article } from "./Article";
import { Author } from "./Author";
import { required } from "../required";

export class Blog{
    private _id:number;
    @required("Nazwa nie może być pusta")
    private _name:string;
    @required("Autor musi zostać podany")
    private _author: Author;
    private _articles: Article[] = [];
    private static _objectCounter: number;

    constructor(id: number, name: string, author: Author, articles: Article[]) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._articles = articles;
    }

    public addArticle(article: Article): void{
        this._articles.push(article);
    }

    public getArticleTitles(): string[] {
        return this._articles.map((article)=>article.title)
    }

    public getArticle(): Article{ 
        return this._articles[this._id];
    }
}