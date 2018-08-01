import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';


@NgModule({
  declarations: [
      ReactiveFormComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ReactiveFormRoutingModule
  ],
  providers: []
})

export class ReactiveFormModule { }
