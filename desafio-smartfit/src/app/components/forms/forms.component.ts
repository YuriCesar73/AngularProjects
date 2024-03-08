import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit{

  //OBS: VERIFICAR O BINDING DO FORM GROUP NO HTML DO COMPONENTE

  results = [];
  formGroup!: FormGroup;

  constructor() { }


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      hour: new FormControl(''),
      showClosed: new FormControl(false)
    })
  }

  onSubmit(){
    console.log("Submit")
    console.log(this.formGroup.value.hour)
    console.log(this.formGroup.value.showClosed)
    console.log(this.formGroup.value)
  }

  onClean(){
    console.log("clean")
    this.formGroup.reset();
  }

}
