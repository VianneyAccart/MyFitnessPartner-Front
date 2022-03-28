import { SavedExercise } from './SavedExercise.model';

export class CreateSession {
  private _date: Date;
  private _feeling: string;
  private _exercises: SavedExercise[];
  private _title: string | undefined;
  private _note: string | undefined;

  constructor(
    date: Date,
    feeling: string,
    exercises: SavedExercise[],
    title?: string,
    note?: string
  ) {
    this._date = date;
    this._feeling = feeling;
    this._exercises = exercises;
    this._title = title;
    this._note = note;
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
   * Getter feeling
   * @return {string}
   */
  public get feeling(): string {
    return this._feeling;
  }

  /**
   * Setter feeling
   * @param {string} value
   */
  public set feeling(value: string) {
    this._feeling = value;
  }

  /**
   * Getter exercises
   * @return {SavedExercise[]}
   */
  public get exercises(): SavedExercise[] {
    return this._exercises;
  }

  /**
   * Setter exercises
   * @param {SavedExercise[]} value
   */
  public set exercises(value: SavedExercise[]) {
    this._exercises = value;
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

  /**
   * Getter note
   * @return {string }
   */
  public get note(): string | undefined {
    return this._note;
  }

  /**
   * Setter note
   * @param {string } value
   */
  public set note(value: string | undefined) {
    this._note = value;
  }
}
