export class SessionInitialization {
  private _date: Date;
  private _name: string | undefined;

  constructor(date: Date, name?: string) {
    this._date = date;
    this._name = name;
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
  public get name(): string | undefined {
    return this._name;
  }

  /**
   * Setter title
   * @param {string } value
   */
  public set name(value: string | undefined) {
    this._name = value;
  }
}
