import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { delayWhen, delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class JsonService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`assets/data.json`).pipe(delay(5000));
  }
}
