import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudPatientService {
  url = `${environment.fhirApiURL}`;

  constructor(private http: HttpClient) {
  }

  deletePatient(patientUrl: string): Observable<any>{
    return this.http.delete(patientUrl);
  }

  addPatient(patient: any): Observable<any>{
    const fullUrl = this.url +   '/Patient';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/fhir+json'
      })
    };
    return this.http.post(fullUrl, patient, httpOptions);
  }

  updatePatient(patient: any, patientUrl: string ): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/fhir+json'
      })
    };
    return this.http.put(patientUrl, patient, httpOptions);
  }

  listPatient(searchTerm: string): Observable<any>{
    const fullUrl = this.url +   '/Patient?_count=103&given=' + searchTerm + '&_pretty=true';
    console.log(fullUrl);
    return this.http.get(fullUrl);
  }

  listSinglePatientBundle(URL: string): Observable<any>{
    const fullUrl = URL + '/$everything';
    return this.http.get(fullUrl);
  }
}
