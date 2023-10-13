class MyComment {
  private _content: string;
  private _date: Date;
  private _replies: MyComment[];
  private _nick: string;

  constructor(content: string, date: Date, nick: string, replies: MyComment[]) {
    this._content = content;
    this._date = date;
    this._nick = nick;
    this._replies = replies;
  }
  addReply(): void {}
  getReplies(): MyComment[] {
    return this._replies;
  }
}
