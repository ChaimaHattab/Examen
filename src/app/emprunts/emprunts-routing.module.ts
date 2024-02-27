import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpruntComponent } from './emprunt/emprunt.component';

const routes: Routes = [
  {path:"emprunts/emprunt",component:EmpruntComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpruntsRoutingModule { }
