import {Author} from "./Author";
import {Article} from "./Article";

export class Blog{
    _id: number 
    _name:string
    _author: Author
    _articles:Article[]
    static _objectCounter: number

    constructor( _name: string, _author: Author, _articles: Article[]) {
        this._id = Blog._objectCounter;
        Blog._objectCounter++
        this._name = _name;
        this._author= _author;
        this._articles= _articles;
    }

    get id():number { return this._id;}
    get name():string { return this._name;}
    set name(value:string) { this._name = value; }

    public addArticle(article:Article):void {
        this._articles.push (article)
    }
    public getArticleTitles():string[] {
        let titles: string[] = []
        this._articles.forEach(article => {
            titles.push(article.title)
        });
        return titles
    }
    public getArticle(id: number):Article{
        return this._articles[id]
    }
}

