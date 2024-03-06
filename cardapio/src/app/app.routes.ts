import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodFormComponent } from './components/food-form/food-form.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent
    },
    {
        path: "food-form",
        component: FoodFormComponent
    }


];
