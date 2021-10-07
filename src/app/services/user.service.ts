import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { User } from './../models/user';
import { awsUrl } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

const url = `${awsUrl}/users`;

// We will inject this service into the components that call its methods within their methjods
@Injectable({ // Services in Angular are singlton objects
  providedIn: 'root'
})
export class UserService { // This service is only responsible for one thing: making HTTP requests to a server

  // We need to inject this service with HttpClient
  constructor(private http: HttpClient) { }

  // We need to append Headers to all requests
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  // POST
  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${url}/add`, user, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  // GET
  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(url)
      .pipe(
        catchError(this.handleError)
      )
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(`${url}/${id}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  public findByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${url}/find/${username}`)
      .pipe(
        catchError(this.handleError)
      )
  }
  // DELETE

  // Create a method called handleError which will be invoked if 
  private handleError(httpError: HttpErrorResponse) {
    if(httpError.error instanceof ErrorEvent) {
      // A client-side or network error occured, handle it accordingly
      console.log("An error occured: ", httpError.error.message)
    } else {
      // The backend returned an unsuccessful response code
      // The response body might have clues for what went wrong
      console.error(`
      Backend returned code ${httpError.status},
      body was: ${httpError.error}
      `)
    }
    // throwError is an Observable from rxjs
    return throwError("Somethign bad happened; please try again later")
  }
}
