import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { BehaviorSubject } from 'rxjs';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CommonModule } from '@angular/common';
import { Location } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';
import { LegendComponent } from './components/legend/legend.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsComponent, CardsListComponent, CommonModule, LegendComponent, FooterComponent],
  providers: [GetUnitsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desafio-smartfit';
  showList = new BehaviorSubject(false);
  unitsList: Location[] = []


  constructor(private unitService: GetUnitsService){

  }


  onSubmit(){
    console.log("Chegou no app");
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true)
  }
}
