import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', //equivalente a /
    component: MyComponentComponent
  },
  {
    path: 'not-found', //equivalente a /
    component: NotFoundComponent
  },
  {
    path: '**', //Caso uma rota não existir, o componente renderizado será esse. Precisa ser o último pois o angular compara as rotas de forma sequencial
    redirectTo: 'not-found' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
