import { MuscularGroup } from './MuscularGroup.model';

export class Exercise {
  private _id: number;
  private _name: string;
  private _description: string;
  private _creationDate: Date;
  private _muscularGroup: MuscularGroup;

  constructor(
    id: number,
    name: string,
    description: string,
    creationDate: Date,
    muscularGroup: MuscularGroup
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._creationDate = creationDate;
    this._muscularGroup = muscularGroup;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter creationDate
   * @return {Date}
   */
  public get creationDate(): Date {
    return this._creationDate;
  }

  /**
   * Getter muscularGroup
   * @return {MuscularGroup}
   */
  public get muscularGroup(): MuscularGroup {
    return this._muscularGroup;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter creationDate
   * @param {Date} value
   */
  public set creationDate(value: Date) {
    this._creationDate = value;
  }

  /**
   * Setter muscularGroup
   * @param {MuscularGroup} value
   */
  public set muscularGroup(value: MuscularGroup) {
    this._muscularGroup = value;
  }
}
