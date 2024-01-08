import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Response } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = new HttpHeaders({
    'x-apikey-marketplace': environment.api_key
  });

  constructor(private _http: HttpClient) {}

  getData(params: HttpParams): Observable<Response> {
    return this._http.get<Response>(
      `https://ds.deepcompany.com/marketplace/product-demo`,
      { headers: this.headers, params }
    );
  }
}
