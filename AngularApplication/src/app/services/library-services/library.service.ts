import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  url = `${environment.fhirApiURL}`;

  constructor(private http: HttpClient) { }

  listLibraries(searchTerm: string): Observable<any>{
    const fullUrl = this.url +   '/Library?title=' + searchTerm + '&_pretty=true';
    console.log(fullUrl);
    return this.http.get(fullUrl);
  }

  deleteLibrary(libraryUrl: string): Observable<any>{
    return this.http.delete(libraryUrl);
  }

  updateLibrary(library: any, libraryUrl: string ): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/fhir+json'
      })
    };
    return this.http.put(libraryUrl, library, httpOptions);
  }

  addLibrary(library: any): Observable<any>{
    const fullUrl = this.url +   '/Library';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/fhir+json'
      })
    };
    return this.http.post(fullUrl, library, httpOptions);
  }
}
