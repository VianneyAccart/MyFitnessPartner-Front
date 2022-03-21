import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MuscularGroup } from '../models/MuscularGroup.model';

@Injectable({
  providedIn: 'root'
})
export class MuscularGroupService {

  constructor(private http: HttpClient) { }

  public getMuscularGroups(): Observable<MuscularGroup[]> {
    return this.http.get<MuscularGroup[]>(environment.apiUrl + 'muscular-groups');
  }
}
