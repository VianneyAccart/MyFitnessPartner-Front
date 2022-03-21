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
}
