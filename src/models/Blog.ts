import { Author } from "./Author";
import { Article } from "./Article";
import { required, validate } from "../Validations";
export class Blog{

    private _id:number;
    @validate([{
        validator: (name: string) => {
            if (!name || name.trim() === '') {
                return false; 
            }
            return true; 
        },
        message: "Name cannot be be empty or contain only whitespace.",
    },
    ])
    private _name:string;
    @required
    private _author:Author;
    private _articles:Article[];
    private static _objectCounter:number;

    constructor(id:number,name:string,author:Author, articles:Article[]){
        this._id=id;
        this._name=name;
        this._author=author;
        this._articles=articles;
        Blog._objectCounter++;
    }

    public addArticle(article:Article):void{
        this._articles.push(article);
    }

    public getArticleTitles():string[]{
        const titles: string[]=[];
        for(const article of this._articles){
            titles.push(article.title);
        }
        return titles;
    }

    public getArticle(index:number): Article | undefined{
        if(index >= 0 && index < this._articles.length){
            return this._articles[index];
        }else{
            return undefined;
        }
    }
}