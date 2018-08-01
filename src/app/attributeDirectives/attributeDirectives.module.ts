import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributeDirectivesComponent } from './attributeDirectives.component';
import { AttributeDirectivesRoutingModule } from './attributeDirectives-routing.module';



@NgModule({
    declarations: [
        AttributeDirectivesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AttributeDirectivesRoutingModule
    ],
    providers: []
})

export class AttributeDirectivesModule { }
