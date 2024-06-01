import { Component, OnInit } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../interfaces/Recipe';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, CommonModule, MatCardModule, CardComponent],
  providers: [RecipeService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private service: RecipeService) {}

  ngOnInit(): void {
    this.service.fetchData().subscribe((data:any) => {
      this.recipes = data.recipes; 
    })
  }
}
