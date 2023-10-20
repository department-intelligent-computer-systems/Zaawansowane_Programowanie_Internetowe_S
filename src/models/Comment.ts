export class Comment {
  private _content: string;
  private _date: Date;
  private _replies: Comment[];
  private _nick: string;

  constructor(content: string, nick: string) {
    this._content = content;
    this._nick = nick;
    this._date = new Date();
  }

  public addReply(comment:Comment): void {}

  public getReplies(): Comment[] {
    return this._replies;
  }
}
