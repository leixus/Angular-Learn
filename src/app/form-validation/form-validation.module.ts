import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { FormValidationComponent } from './form-validation.component';
import { FormValidationRoutingModule } from './form-validation-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
    declarations: [
        FormValidationComponent,
        ReactiveComponent,
        ForbiddenValidatorDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        // BrowserModule,
        ReactiveFormsModule,
        FormValidationRoutingModule,
        HttpClientModule,
        NgZorroAntdModule
    ],
    providers: [
        // {
        //     provide: NG_VALIDATORS,
        //     useExisting: ForbiddenValidatorDirective,
        //     multi: true
        // }
    ]
})

export class FormValidationModule { }
