import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';


@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormRoutingModule
    ],
    providers: []
})

export class FormModule { }
