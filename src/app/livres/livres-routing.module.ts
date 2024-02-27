import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListlivresComponent } from './listlivres/listlivres.component';

const routes: Routes = [
  {path:"livres/listlivres",component:ListlivresComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivresRoutingModule { }
