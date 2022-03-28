export class SavedSerie {
  private _repetitions: number;
  private _weight: number;

  constructor(repetitions: number, weight: number) {
    this._repetitions = repetitions;
    this._weight = weight;
  }

  /**
   * Getter repetitions
   * @return {number}
   */
  public get repetitions(): number {
    return this._repetitions;
  }

  /**
   * Setter repetitions
   * @param {number} value
   */
  public set repetitions(value: number) {
    this._repetitions = value;
  }

  /**
   * Getter weight
   * @return {number}
   */
  public get weight(): number {
    return this._weight;
  }

  /**
   * Setter weight
   * @param {number} value
   */
  public set weight(value: number) {
    this._weight = value;
  }
}
