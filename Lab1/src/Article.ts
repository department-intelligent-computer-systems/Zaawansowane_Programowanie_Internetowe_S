import { Commentu } from "./Commentu";
export class Article{
    private _id : number;
    private _title : string;
    private _content : string;
    private _creationDate : Date;
    private _comments: Commentu[];
    private static _objectCounter : number = 0;
    constructor(id:number,title:string,content:string,creationDate:Date,comments:Commentu[]){
        this._id = id;
        if(title===""){
        console.log("Podaj tytul artykulu");
        }else if(creationDate.toDateString() !== new Date().toDateString()){
        console.log("Podaj dzisiejszą date");}
        else{
            this._title = title;
            this._creationDate = creationDate;
        }
        this._content = content;
        this._comments = comments;
        Article._objectCounter++;
    }
    public addComment(comment:Commentu):void {
    this._comments.push(comment);
    }
    public getComments():Commentu[]{
        return this._comments;
    }

    get id(): number{
        return this._id
    }

    get title(): string{
        return this._title
    }
}