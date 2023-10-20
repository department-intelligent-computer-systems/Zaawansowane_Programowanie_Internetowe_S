import { required } from "../decorators/Required";
import { validate } from "../validators/Validator";

export class Article {
  public _id: number;
  @validate([
    {
      validator: (title: string) => {
        if (!title || title.trim() === "") {
          return false;
        }
        return true;
      },
      message:
        "Tytuł nie może być pusty ani zawierać wyłącznie białych znaków.",
    },
  ])
  private _title: string;
  private _content: string;
  @required
  private _creationDate: Date;
  private _comments: Comment[];
  static objectCounter: number;

  constructor(id: number, title: string, content: string, comments: Comment[]) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._creationDate = new Date();
    this._comments = comments;
  }

  get id():number{return this._id}
  get title():string{return this._title}

  public getComments(): Comment[] {
    return this._comments;
  }

  public addComment(comment: Comment): void {
    this._comments.push(comment);
  }
}
