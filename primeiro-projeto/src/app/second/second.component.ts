import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

  @Input('my-prop') myProp: string = '';
  @Output() newItemEvent = new EventEmitter<string>();


  handleClick(){
    console.log("clique")
    this.newItemEvent.emit("oii pai");

  }

}
