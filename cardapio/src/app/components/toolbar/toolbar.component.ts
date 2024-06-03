import { Component, EventEmitter } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { FormsModule } from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatCheckboxModule, FormsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  showFavorite: boolean = false;
  @Output('showFavorite') changedValueCheckbox = new EventEmitter();


  valueCheckbox(){
    this.showFavorite = !this.showFavorite;
    this.changedValueCheckbox.emit(this.showFavorite);

  }
 
}
