import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/Recipe';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  readonly API = "https://dummyjson.com/recipes"

  constructor(private httpClient: HttpClient) { }

  fetchData(): Observable<Recipe[]>{
    return this.httpClient.get<Recipe[]>(this.API);
  }


}
