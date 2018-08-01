import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DynamicComponent} from './dynamic.component';
import {DynamicRoutingModule} from './dynamic-routing.module';



@NgModule({
  declarations: [
    DynamicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicRoutingModule
  ],
  providers: []
})

export class DynamicModule { }
