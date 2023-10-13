import { author } from "./author"
import { article } from "./article"

class blog{
    private _id: number
    private _name: string
    private _author: author
    private _articles: article[]
    static _objectCounter: number

    constructor(id: number, name:string,author: author, articles: article,objectCounter: number){
        this._id = id;
        this._name = name;
        this._author = author;
        this._articles = articles[];
    

    }

    public addArticle():void{}  
    public getArticleTitles():string[]{}
    public getArticle():article{}
}
