
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {map, catchError} from 'rxjs/operators';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Task } from './task.model';

@Injectable()

export class TaskService {
    public tasksUrl = 'api/tasks';
    public headers = new Headers({'Content-type': 'application/json'});

    public constructor(private http: Http) {}

    public getAll(): Observable<Task[]> {
      return this.http.get(this.tasksUrl).pipe(
        catchError(this.handleErrors),
        map((response: Response) => response.json().data as Task[]),);
    }

    public getImportant(): Observable<Task[]> {
      return this.getAll().pipe(
        catchError(this.handleErrors),
        map(tasks => tasks.slice(0, 3)),);
    }

    public getById(id: number): Observable<Task> {
      const url = `${this.tasksUrl}/${id}`;

      return this.http.get(url).pipe(
        catchError(this.handleErrors),
        map((response: Response) => response.json().data as Task),);
    }

    public create(task: Task): Observable<Task> {
      const url = this.tasksUrl;
      const body = JSON.stringify(task);

      return this.http.post(url, body, { headers: this.headers }).pipe(
        catchError(this.handleErrors),
        map((response: Response) => response.json().data as Task),);

    }

    public update(task: Task): Observable<Task> {
      const url = `${this.tasksUrl}/${task.id}`;
      const body = JSON.stringify(task);

      return this.http.put(url, body, { headers: this.headers }).pipe(
        catchError(this.handleErrors),
        map(() => task),);
    }

    public delete(id: number): Observable<null> {
      const url = `${this.tasksUrl}/${id}`;

      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.handleErrors),
        map(() => null),);
    }

    public searchByTitle(term: string): Observable<Task[]> {
      const url = `${this.tasksUrl}?title=${term}`;

      return this.http.get(url).pipe(
        catchError(this.handleErrors),
        map((response: Response) => response.json().data as Task[]),);
    }

    public handleErrors(error: Response) {
      console.log('Salvando o erro em um arquivo de log - detalhes do erro => ', error);
      return observableThrowError(error);
    }


}
