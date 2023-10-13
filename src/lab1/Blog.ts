import { Article } from "./Article";
import { Author } from "./Author";

export class Blog{
    private _id: number;
    private _name:string;
    private _author: Author;
    private _articles: Article;
    private static _objectCounter: number = 0;
    
}