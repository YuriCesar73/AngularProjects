import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import {Cat} from "../my-component/my-component.component"

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private httpClient: HttpClient) { }


  fetchData(): Observable<any>{
    return this.httpClient.get('https://api.thecatapi.com/v1/images/search?limit=10');
  }
}
