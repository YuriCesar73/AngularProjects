import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { FoodService } from '../../services/food.service';
import { FoodModel } from '../../interfaces/FoodResponse';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'card-food',
  standalone: true,
  imports: [MatCardModule, CommonModule, ButtonComponent],
  providers: [FoodService],
  templateUrl: './card-food.component.html',
  styleUrl: './card-food.component.scss'
})
export class CardFoodComponent implements OnInit{

  foods: Observable<FoodModel[]> = new Observable<FoodModel[]>();

  constructor(private service: FoodService){

    console.log("Cheguei no construtor")
  }

  ngOnInit(): void {
    console.log("Cheguei no OnInit");
    console.log(this.foods)

    this.foods = this.service.getData();

    console.log(this.foods)
  }

  
  onSubmit() {
    console.log("Cheguei aqui")
    }

  addFood(food: FoodModel){
    console.log("Cheguei no addFood");
    console.log(food);
    this.service.addFood(food);
  }

}
