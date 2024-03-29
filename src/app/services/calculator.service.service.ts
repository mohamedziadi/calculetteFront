import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Numbers} from "../models/numbers.model";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  constructor(private http: HttpClient) { }


  addOpration(numbers:Numbers): Observable<number> {
    return this.http.post<number>(`${environment.api_url}add`, numbers);
  }

  substructOpration(numbers:Numbers): Observable<number> {
    return this.http.post<number>(`${environment.api_url}subtract`, numbers);
  }
  multiplyOpration(numbers:Numbers): Observable<number> {
    return this.http.post<number>(`${environment.api_url}multiply`, numbers);
  }
  divideOpration(numbers:Numbers): Observable<number> {
    return this.http.post<number>(`${environment.api_url}divide`, numbers);
  }

}
