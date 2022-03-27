import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exercise } from '../models/Exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http: HttpClient) {}

  public getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(environment.apiUrl + 'exercises');
  }

  public getExerciseById(id: number): Observable<Exercise> {
    return this.http.get<Exercise>(environment.apiUrl + 'exercise/' + id);
  }

  public createExercise(datasToSend: FormData): Observable<any> {
    return this.http.post(environment.apiUrl + 'exercise/create', datasToSend);
  }

  public modifyExercise(id: number, datasToSend: FormData): Observable<any> {
    return this.http.patch(environment.apiUrl + 'exercise/' + id + '/modify', datasToSend);
  }

  public deleteExercise(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'exercise/' + id + '/delete');
  }

  public getExercisesByMuscularGroupId(id: number): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(environment.apiUrl + 'muscular-group/' + id + '/exercises');
  }
}
