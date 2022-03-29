import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSession } from '../models/CreateSession.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient ) { }

  public createSession(datasToSend: CreateSession): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'session/create', datasToSend);
  }
}
