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

  favorite: boolean = false;
  iconColor: string = 'primary'


  isFavorite(){
    console.log("Cheguei no isFavorite.")
    if(!this.favorite){
      this.iconColor = 'warn'
      this.favorite = !this.favorite;
    }
    else {
      this.iconColor = 'primary'
      this.favorite = !this.favorite;
    }
  }

}
