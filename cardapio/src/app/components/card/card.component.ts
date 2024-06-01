import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/Recipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() food!: Recipe;

  constructor(){
    
  }

}
