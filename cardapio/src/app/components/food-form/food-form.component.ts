import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'food-form',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.scss'
})
export class FoodFormComponent {

  foodForm!: FormGroup;



  constructor(){
    this.foodForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      subtitle: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      urlImage: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    if(this.foodForm.valid){
      
    }
  }

}
