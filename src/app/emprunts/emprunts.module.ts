import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpruntsRoutingModule } from './emprunts-routing.module';
import { EmpruntComponent } from './emprunt/emprunt.component';


@NgModule({
  declarations: [
    EmpruntComponent
  ],
  imports: [
    CommonModule,
    EmpruntsRoutingModule
  ]
})
export class EmpruntsModule { }
