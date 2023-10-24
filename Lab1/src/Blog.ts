import { Author } from "./Author";
import { Article } from "./Article";
export class Blog{
    private _id : number;
    private _name : string;
    private _author : Author;
    private _articles : Article[];
    private static _objectCounter : number = 0;

    constructor(id:number,name:string,author:Author,articles:Article[]){
        this._id = id;
        if(name===""){
            console.log("Podaj nazwe bloga");
        }else if(!author){
        console.log("Podaj autora");
        }else{
            this._name = name;
            this._author = author;
        }
        this._articles = articles;
        Blog._objectCounter++;
    }

    public addArticle(article:Article): void {
        this._articles.push(article);
    }

    public getArticleTitles(): string[] {
        // Tworzymy tablicę, w której będziemy przechowywać tytuły artykułów
        const titles: string[] = [];

        // Iterujemy przez wszystkie artykuły i dodajemy ich tytuły do tablicy
        for (const article of this._articles) {
            titles.push(article.title);
        }

        return titles
    }

    public getArticle(id:number) : Article {
        let foundArticle: Article = null;
        this._articles.forEach(article => {
            if(article.id==id){
                foundArticle = article;
            } 
        });
        return foundArticle;
    }
}