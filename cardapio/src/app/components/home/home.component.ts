import { Component, OnInit } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FoodService } from '../../services/food.service';
import { Observable } from 'rxjs';
import { Food } from '../../interfaces/FoodResponse';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatGridListModule,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{


  receitas$: Observable<Food[]> = new Observable<Food[]>();

  constructor(private service: FoodService){

  }

  ngOnInit(): void {
    this.receitas$ = this.service.fetchData();
    this.receitas$.forEach((value) => console.log(value))
  }




  

}
