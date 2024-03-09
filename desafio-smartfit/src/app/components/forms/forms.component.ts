import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '../../types/location.interface';
import { FilterUnitsService } from '../../services/filter-units.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [GetUnitsService, FilterUnitsService],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit{


  @Output() submitEvent = new EventEmitter(); 
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(private unitService: GetUnitsService, private filterUnitsService: FilterUnitsService) { }


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      hour: new FormControl(''),
      showClosed: new FormControl(true)
    })

    this.unitService.getAllUnits().subscribe(data => {
      this.results = data;
      this.filteredResults = data;
    });
  }

  onSubmit(){
    let {showClosed, hour} = this.formGroup.value;
    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour)
    this.unitService.setFilteredUnits(this.filteredResults);

    this.submitEvent.emit();
  }

  onClean(){
    console.log("clean")
    this.formGroup.reset();
  }

}
