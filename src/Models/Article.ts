class Article {
    private _id: number;
    private _title: string;
    private _content: string;
    private _creationDate: Date;
    private _coments: Coment[];
    private static static_objectCounter: number = 0;
  
    constructor(id: number, title: string, content: string, creationDate: Date) {
      this._id = id;
      this._title = title;
      this._content = content;
      this._creationDate = creationDate;
      this._coments = [];
      Article.static_objectCounter++;
    }

    get id():number { return this._id;}

    get title():string { return this._title;}
    set title(value:string) { this._title = value; }

    get content():string { return this._content;}
    set content(value:string) { this._content = value; }

    get creationDate():Date { return this._creationDate;}
    set creationDate(value:Date) { this._creationDate = value; }

    get coments():Coment[] { return this._coments;}
    set coments(value:Coment[]) { this._coments = value; }
  
    public addComment(coment: Coment): void {
      this._coments.push(coment);
    }
  
    public getComments(): Coment[] {
      return this._coments;
    }

  }