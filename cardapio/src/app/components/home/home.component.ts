import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardFoodComponent } from '../card-food/card-food.component';
import { ButtonComponent } from '../button/button.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardFoodComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
