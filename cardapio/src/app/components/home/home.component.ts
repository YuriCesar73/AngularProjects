import { Recipe } from './../../interfaces/Recipe';
import { Component, Input, OnInit } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../card/card.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, CommonModule, MatCardModule, CardComponent, ToolbarComponent],
  providers: [RecipeService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  recipes: Recipe[] = [];
  favoriteRecipes: Recipe[] = [];
  isFavoriteList: boolean = false;

  constructor(private service: RecipeService) {}

  ngOnInit(): void {
    this.service.fetchData().subscribe((data:any) => {
      this.recipes = data.recipes; 
    })
  }


  addFavoriteRecipe(recipe: Recipe){
    this.favoriteRecipes.push(recipe);
  }

  removeFavoriteRecipe(recipe: Recipe){
    if(this.favoriteRecipes.length != 0){
      let index = this.favoriteRecipes.findIndex((r) => r.id == recipe.id);
      this.favoriteRecipes.splice(index, 1);
    }
  }

  showFavoriteList(){
    this.isFavoriteList = !this.isFavoriteList;
  }
}
