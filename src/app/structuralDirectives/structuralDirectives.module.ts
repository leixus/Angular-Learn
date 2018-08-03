import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StructuralDirectivesRoutingModule} from './structuralDirectives-routing.module';
import {StructuralDirectivesComponent} from './structuralDirectives.component';




@NgModule({
  declarations: [
    StructuralDirectivesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StructuralDirectivesRoutingModule
  ],
  providers: []
})

export class StructuralDirectivesModule { }
