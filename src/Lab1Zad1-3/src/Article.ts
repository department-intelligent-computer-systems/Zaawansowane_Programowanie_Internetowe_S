export class Article {
  constructor(
    public _id: number,
    public _title: string,
    public  _content:string,
    public _creationDate: Date,
    public _comments:Comment[],
    public _ObjectCounter:number
  ) {
    var currentDate = new Date();
    console.log(currentDate);
    if (this._title==''){
      throw new Error('Podaj tytuł artykułu')
    } 
    if(this._creationDate.toDateString()!=currentDate.toDateString()){
      console.log(this._creationDate)
      throw new Error('Podaj dzisiejszą datę')
    }
  }
    addComment(comment:Comment):void{
        this._comments.push(comment);
    }
    getComments():Comment[]{
        return this._comments;
    }
  
}