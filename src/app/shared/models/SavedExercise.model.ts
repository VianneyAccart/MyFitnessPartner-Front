import { SavedSerie } from './SavedSerie.model';

export class SavedExercise {
  private _muscularGroupId: string;
  private _nameId: string;
  private _series: SavedSerie[];

  constructor(muscularGroupId: string, nameId: string, series: SavedSerie[]) {
    this._muscularGroupId = muscularGroupId;
    this._nameId = nameId;
    this._series = series;
  }

  /**
   * Getter muscularGroupId
   * @return {string}
   */
  public get muscularGroupId(): string {
    return this._muscularGroupId;
  }

  /**
   * Setter muscularGroupId
   * @param {string} value
   */
  public set muscularGroupId(value: string) {
    this._muscularGroupId = value;
  }

  /**
   * Getter nameId
   * @return {string}
   */
  public get nameId(): string {
    return this._nameId;
  }

  /**
   * Setter nameId
   * @param {string} value
   */
  public set nameId(value: string) {
    this._nameId = value;
  }

  /**
   * Getter series
   * @return {SavedSerie[]}
   */
  public get series(): SavedSerie[] {
    return this._series;
  }

  /**
   * Setter series
   * @param {SavedSerie[]} value
   */
  public set series(value: SavedSerie[]) {
    this._series = value;
  }
}
