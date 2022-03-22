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

  public getMuscularGroupById(id: number): Observable<MuscularGroup> {
    return this.http.get<MuscularGroup>(environment.apiUrl + 'muscular-group/' + id);
  }

  public createMuscularGroup(datasToSend: FormData): Observable<any> {
    return this.http.post(environment.apiUrl + 'muscular-group/create', datasToSend);
  }

  public modifyMuscularGroup(id: number, datasToSend: FormData): Observable<any> {
    return this.http.patch(environment.apiUrl + 'muscular-group/' + id + '/modify', datasToSend);
  }

  public deleteMuscularGroup(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'muscular-group/' + id + '/delete');
  }
}
