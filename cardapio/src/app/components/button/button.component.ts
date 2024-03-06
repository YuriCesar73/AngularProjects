import { FoodModel } from './../../interfaces/FoodResponse';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardFoodComponent } from '../card-food/card-food.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, CardFoodComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input("btn-text") btnText: string = "";
  @Output() newItemEvent = new EventEmitter<FoodModel>();


  onClick(){
    console.log("Cheguei no onclick do button component.")


    const food: FoodModel = {
      title: "Fondue Suíço novo",
      subtitle: "Queijos Fundidos em um Banho de Vin",
      content: "Um prato reconfortante que consiste em queijos suíços derretidos em um fondue ddo com pães crocantes, vegetais frescos e charcutaria. Perfeito para compartilhar em uma noite fria de inverno com amigos e família.",
      urlImage: "https://imagem.band.com.br/44/f_307244.jpg"
    }

    this.newItemEvent.emit(food);
  }
}
