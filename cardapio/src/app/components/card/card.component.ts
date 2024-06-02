import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output('addFavorite') addFavorite = new EventEmitter<Recipe>();
  @Output('removeFavorite') removeFavorite = new EventEmitter<Recipe>();

  favorite: boolean = false;
  iconColor: string = 'primary'



  isFavorite(recipe: Recipe){
    if(!this.favorite){
      this.iconColor = 'warn'
      this.favorite = !this.favorite;
      this.addFavorite.emit(recipe);
    }
    else {
      this.iconColor = 'primary'
      this.favorite = !this.favorite;
      this.removeFavorite.emit(recipe);
    }
  }

}
