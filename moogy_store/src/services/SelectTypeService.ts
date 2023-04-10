import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(private http: HttpClient) { }

  getOptions(): Observable<string[]> {
    return this.http.get<string[]>('/assets/options.json')
  }
}
