import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit{

  //OBS: VERIFICAR O BINDING DO FORM GROUP NO HTML DO COMPONENTE

  results = [];
  formGroup!: FormGroup;

  constructor(private formbuilder: FormBuilder) { }


  ngOnInit(): void {
    this.formGroup = this.formbuilder.group({
      hour: '',
      showClosed: false
    })
  }

  onSubmit(){
    console.log("Submit")
  }

  onClean(){
    console.log("clean")
  }

}
