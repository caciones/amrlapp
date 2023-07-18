import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LiteraryRoute } from './literary_route';
import { catchError, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Point } from './point';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = '/api/'
  query = ''
  literary_routes: LiteraryRoute[] = [];

  constructor(
    private http: HttpClient
  ) { }

  private log(message: string) {
    console.log(message);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPoint(id: string | null) {
    const baseUrl = `${this.apiUrl}point/${id}/`
    console.log(baseUrl)
    return this.http.get<Point>(baseUrl)
                    .pipe(
                      tap(_ => this.log('fetched point')),
                      catchError(this.handleError<Point>(`getPoint id=${id}`))
                    )
  }

  getRoute(id: string | null) {
    const baseUrl = `${this.apiUrl}route/${id}/`
    console.log(baseUrl)
    return this.http.get<LiteraryRoute>(baseUrl)
                    .pipe(
                      tap(_ => this.log('fetched route')),
                      catchError(this.handleError<LiteraryRoute>(`getRoute id=${id}`))
                    )
  }

  listRoutes(urlParams?: any): Observable<LiteraryRoute[]> {
    let baseUrl

    if(!urlParams){
      baseUrl = `${this.apiUrl}route/`
    }
    else{
      baseUrl = `${this.apiUrl}route/${urlParams}`
    }

    return this.http.get<LiteraryRoute[]>(baseUrl)
                    .pipe(
                      tap(_ => this.log('fetched LiteraryRoutes')),
                      catchError(this.handleError<LiteraryRoute[]>('getRoute', []))
                    )
  }


}
