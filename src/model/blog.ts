import { Article } from "./article";
import { Author } from "./author";

export class Blog {
    private _id: number;
    @validate([{
        validator: (name: string) => name.length > 0,
        message: "Nazwa nie może być pusta"
    }])
    private _name: string;
    @required()
    private _author: Author;
    private _articles: Article[];
    private static _objectCounter: number;

    constructor(id: number, name: string, author: Author,
            articles: Article[]) {    
        this._id = id;
        this._name = name;
        this._author = author;
        this._articles = articles;
    }

    addArticle(): void {}
    getArticleTitles(): string[] {
        return [""];
    }
    getArticle(): Article {
        return new Article(1,"","",[]);
    }
}