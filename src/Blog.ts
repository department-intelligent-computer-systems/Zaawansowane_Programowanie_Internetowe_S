import { Author } from "./Author";
import { Article } from "./Article";

class Blog {
    _id: number;
    _name: string;
    _author: Author;
    _articles: Article[];
    static _objectCounter: number;

    constructor(id:number, name:string, author:Author, article:Article[]) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._articles = article;
    } 

    addArticle() {
        
    }

    getArticleTitles(): string[] {
        return this._articles.map(x => x._title)
    }

    // getArticle(): Article {
       
    // }
}