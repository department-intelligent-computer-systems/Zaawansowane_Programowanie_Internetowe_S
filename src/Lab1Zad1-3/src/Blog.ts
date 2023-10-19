import { Article } from "./Article";
import { Author } from "./Author";
export class Blog{
    constructor(private id:number, private _name:string, private _author:Author,private _articles:Article[], private _ObjectCounter:number){
        if(_name==""){
            throw new Error("Podaj nazwe bloga");
        }
        if(!_author){
            throw new Error("Podaj autora");
        }
    }
    addArticle(article:Article):void{
        this._articles.push(article);
    }
    getArticleTitles():string[]{
        let titles:string[]=[];
        this._articles.forEach(article => {
            titles.push(article._title);
        });
        return titles;
    }
    getArticle(id:number):Article{
        let foundArticle: Article = null;
        this._articles.forEach(article => {
            if(article._id==id){
                foundArticle = article;
            } 
        });
        return foundArticle;
    }
}