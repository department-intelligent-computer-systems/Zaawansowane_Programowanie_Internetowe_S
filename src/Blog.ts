import { Article } from "./Article";
import { Author } from "./Author";
import required from "./required";

export class Blog {
    private _id: number;
    @required("to pole nie moze byc puste")
    private _name: string;
    private _author: Author;
    private _articles: Article[];
    private static _objectCounter: number = 0;

    constructor(id:number, name:string, author:Author, articles:Article[], objectCounter:number){
        this._id = Blog._objectCounter++;
        this._name = name;
        this._author = author;
        this._articles = articles;
    }

    public addArticle(article:Article):void{ 
        this._articles.push(article);
    }
    public getArticleTitiles():string[]{     
        return this._articles.map(article => article.title);
    }
    public getArticle():Article{ return this._getArticle;}    
}

