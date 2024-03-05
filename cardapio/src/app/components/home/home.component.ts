import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardFoodComponent } from '../card-food/card-food.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardFoodComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
