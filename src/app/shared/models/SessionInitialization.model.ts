export class SessionInitialization {
  private _date: Date;
  private _title: string | undefined;

  constructor(date: Date, title?: string) {
    this._date = date;
    this._title = title;
  }

  /**
   * Getter date
   * @return {Date}
   */
  public get date(): Date {
    return this._date;
  }

  /**
   * Setter date
   * @param {Date} value
   */
  public set date(value: Date) {
    this._date = value;
  }

  /**
   * Getter title
   * @return {string }
   */
  public get title(): string | undefined {
    return this._title;
  }

  /**
   * Setter title
   * @param {string } value
   */
  public set title(value: string | undefined) {
    this._title = value;
  }
}
