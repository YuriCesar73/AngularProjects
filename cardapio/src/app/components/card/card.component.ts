import { Recipe } from './../../interfaces/Recipe';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';




@Component({
  selector: 'card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, OnChanges{

  @Input() food!: Recipe;
  @Output('addFavorite') addFavorite = new EventEmitter<Recipe>();
  @Output('removeFavorite') removeFavorite = new EventEmitter<Recipe>();
  iconColor: string = 'primary'

  ngOnInit(): void {
    this.setFavorite()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setFavorite()
  }

  private setFavorite(){
    if(!this.food.isFavorite){
      this.iconColor = 'warn'
      this.food.isFavorite = !this.food.isFavorite;
    }
    else {
      this.iconColor = 'primary'
      this.food.isFavorite = !this.food.isFavorite
    }
  }


  isFavorite(recipe: Recipe){
    if(!recipe.isFavorite){
      this.iconColor = 'warn'
      recipe.isFavorite = !recipe.isFavorite;
      this.addFavorite.emit(recipe);
    }
    else {
      this.iconColor = 'primary'
      recipe.isFavorite = !recipe.isFavorite
      this.removeFavorite.emit(recipe);
    }
  }

}
