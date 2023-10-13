class Article{
    private _id: number;
    private _title: string;
    private _content: string;
    private _creationDate: Date;
    private _comments: _Comment[];
    private static _objectCounter: number;
  
    constructor(id: number, title: string, content: string) {
      if (!title) {
        throw new Error("Tytuł artykułu jest wymagany");
      }
      this._id = id;
      this._title = title;
      this._content = content;
      this._creationDate = new Date();
      this._comments = [];
      Article._objectCounter++;
    }
    get title(): string {
        return this._title;
      }

      public addComments(comments: _Comment): void {
        this._comments.push(comments);
      }
      public getComments(index: number): _Comment | undefined {
        if (index >= 0 && index < this._comments.length) {
          return this._comments[index];
        } else {
          return undefined;
        }
      }

}