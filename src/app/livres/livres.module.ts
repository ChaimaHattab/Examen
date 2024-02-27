import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivresRoutingModule } from './livres-routing.module';
import { ListlivresComponent } from './listlivres/listlivres.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    ListlivresComponent
  ],
  imports: [
    CommonModule,
    LivresRoutingModule,
    FormsModule,
    DataTablesModule,
   
  ]
})
export class LivresModule { }
