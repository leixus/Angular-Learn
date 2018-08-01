import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing.module';


@NgModule({
  declarations: [
    TemplateDrivenFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateDrivenFormRoutingModule
  ],
  providers: []
})

export class TemplateDrivenFormModule { }
