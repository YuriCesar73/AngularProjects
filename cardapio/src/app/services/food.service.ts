import { Injectable } from '@angular/core';
import { Food } from '../interfaces/FoodResponse';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  readonly API = "https://dummyjson.com/recipes"

  constructor(private httpClient: HttpClient) { }

  fetchData(): Observable<Food[]>{
    return this.httpClient.get<Food[]>(this.API).pipe(map((response: any) => {
      return response.recipes;
    }))
  }


}
