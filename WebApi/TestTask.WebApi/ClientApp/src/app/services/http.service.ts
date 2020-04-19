import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class HttpService {

    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiUrl;
    }

    public Get<T>(url: string): Observable<T> {
        const requestUrl = `${this.baseUrl}/${url}`;
        const headers = this.GetHeaders();

        return this.http.get<T>(requestUrl, { headers })
            .pipe(
                catchError(this.handleError<T>())
            );
    }

    public Post<T>(url: string, requestData: any): Observable<T> {
        const requestUrl = `${this.baseUrl}/${url}`;
        const headers = this.GetHeaders();

        return this.http.post<T>(requestUrl, requestData, { headers })
            .pipe(
                catchError(this.handleError<T>())
            );
    }

    public Put<T>(url: string, requestData: any): Observable<T> {
        const requestUrl = `${this.baseUrl}/${url}`;
        const headers = this.GetHeaders();

        return this.http.put<T>(requestUrl, requestData, { headers })
            .pipe(
                catchError(this.handleError<T>())
            );
    }

    public Delete<T>(url: string): Observable<T> {
        const requestUrl = `${this.baseUrl}/${url}`;
        const headers = this.GetHeaders();

        return this.http.delete<T>(requestUrl, { headers })
            .pipe(
                catchError(this.handleError<T>())
            );
    }

    private GetHeaders(): any {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');

        return headers;
    }

    private handleError<T>(result?: T): (error: any) => Observable<T> {
        return (error: any): Observable<T> => {
            console.log(error);
            // TODO: send the error to remote logging infrastructure

            // Let the app keep running by returning an empty result.
            
            throw error;
        };
    }
}
