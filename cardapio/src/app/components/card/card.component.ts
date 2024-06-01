import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/Recipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() food!: Recipe;

  constructor(){
    
  }

}
