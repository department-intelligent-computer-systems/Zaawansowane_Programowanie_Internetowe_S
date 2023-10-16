export class Article {
  private _id: number;
  private _title: string;
  private _content: string;
  private _creationDate: Date;
  private _comments: Comment[];
  private static objectCounter: number;

  constructor(
    id: number,
    title: string,
    content: string,
  ) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._creationDate = new Date();
  }

  getComments(): Comment[] {
    return this._comments;
  }

  addComment(comment: Comment): void {
    this._comments.push(comment);
  }
}
