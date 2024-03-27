import { Component, Input } from '@angular/core';
import { Food } from '../../interfaces/FoodResponse';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() food!: Food;

  constructor(){
    
  }

}
