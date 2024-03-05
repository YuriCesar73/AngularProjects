import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { FoodService } from '../../services/food.service';
import { FoodModel } from '../../interfaces/FoodResponse';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'card-food',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  providers: [FoodService],
  templateUrl: './card-food.component.html',
  styleUrl: './card-food.component.scss'
})
export class CardFoodComponent implements OnInit{

  @Input() foods: FoodModel[] = []

  constructor(private service: FoodService){

  }

  ngOnInit(): void {
    console.log("Cheguei no OnInit");

    this.foods = this.service.getData();

    console.log(this.foods)
  }

  
  onSubmit() {
    console.log("Cheguei aqui")
    }


}
