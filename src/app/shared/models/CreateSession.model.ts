import { SavedExercise } from './SavedExercise.model';

export class CreateSession {
  private date: string;
  private feelingId: string;
  private exercises: SavedExercise[];
  private name: string | undefined;
  private note: string | undefined;

  constructor(
    date: string,
    feelingId: string,
    exercises: SavedExercise[],
    name?: string,
    note?: string
  ) {
    this.date = date;
    this.feelingId = feelingId;
    this.exercises = exercises;
    this.name = name;
    this.note = note;
  }

  /**
   * Getter $date
   * @return {string}
   */
  public get $date(): string {
    return this.date;
  }

  /**
   * Getter $feelingId
   * @return {string}
   */
  public get $feelingId(): string {
    return this.feelingId;
  }

  /**
   * Getter $exercises
   * @return {SavedExercise[]}
   */
  public get $exercises(): SavedExercise[] {
    return this.exercises;
  }

  /**
   * Getter $name
   * @return {string }
   */
  public get $name(): string | undefined {
    return this.name;
  }

  /**
   * Getter $note
   * @return {string }
   */
  public get $note(): string | undefined {
    return this.note;
  }

  /**
   * Setter $date
   * @param {string} value
   */
  public set $date(value: string) {
    this.date = value;
  }

  /**
   * Setter $feelingId
   * @param {string} value
   */
  public set $feelingId(value: string) {
    this.feelingId = value;
  }

  /**
   * Setter $exercises
   * @param {SavedExercise[]} value
   */
  public set $exercises(value: SavedExercise[]) {
    this.exercises = value;
  }

  /**
   * Setter $name
   * @param {string } value
   */
  public set $name(value: string | undefined) {
    this.name = value;
  }

  /**
   * Setter $note
   * @param {string } value
   */
  public set $note(value: string | undefined) {
    this.note = value;
  }
}
