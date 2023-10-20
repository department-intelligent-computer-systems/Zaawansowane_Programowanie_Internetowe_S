import MyComment from "./MyComment";
import { required } from "./decorators/required";

export default class Article {
  private _id: number;
  @required
  private _title: string;
  private _content: string;
  private _creationDate: Date;
  private _comments: MyComment[];
  private static _objectCounter: number;

  constructor(
    content: string,
    id: number,
    title: string,
    creationDate: Date,
    comments: MyComment[]
  ) {
    this._content = content;
    this._id = id;
    this._title = title;
    this._creationDate = new Date();
    this._comments = comments;
  }
  get title(): string {
    return this.title;
  }
  addComment(): void {}
  getComments(): MyComment[] {
    return this._comments;
  }
}
