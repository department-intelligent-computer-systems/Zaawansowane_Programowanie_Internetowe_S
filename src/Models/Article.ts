class Article {
    private _id: number;
    private _title: string;
    private _content: string;
    private _creationDate: Date;
    private _comments: Comment[];
    private static static_objectCounter: number = 0;
  
    constructor(id: number, title: string, content: string, creationDate: Date) {
      this._id = id;
      this._title = title;
      this._content = content;
      this._creationDate = creationDate;
      this._comments = [];
      Article.static_objectCounter++;
    }
  
    public addComment(comment: Comment): void {
      this._comments.push(comment);
    }
  
    public getComments(): Comment[] {
      return this._comments;
    }
  
    public getTitle(): string {
      return this._title;
    }
  }