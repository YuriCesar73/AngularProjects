import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [GetUnitsService],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit{

  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(private unitService: GetUnitsService) { }


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      hour: new FormControl(''),
      showClosed: new FormControl(true)
    })

    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onSubmit(){
    if(!this.formGroup.value.showClosed){
      this.filteredResults = this.results.filter(location => location.opened === true)
    } else {
      this.filteredResults = this.results;
    }
    
  }

  onClean(){
    console.log("clean")
    this.formGroup.reset();
  }

}
