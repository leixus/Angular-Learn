import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributeDirectivesComponent } from './attributeDirectives.component';
import { AttributeDirectivesRoutingModule } from './attributeDirectives-routing.module';
import { HighlightDirective } from './highlight.directive';



@NgModule({
    declarations: [
        AttributeDirectivesComponent,
        HighlightDirective
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
