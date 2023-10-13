import { Article } from "./article";
import { Author } from "./author";


class Blog {
    private _id:number;
    private _name:string;
    private _author:Author;
    private _articles:Article;
    private static _objectCounter:number;

    constructor(id:number, name:string ){
        this._id = id;
        this._name=name;
    }


    public addArticle():void{

    }
    public getArticleTitles():string[]{
        return this._articles.map(x => x._title);
    }
    
    public getArticle():Article{

    }
        
   
}
