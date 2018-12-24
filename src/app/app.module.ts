import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ForbiddenValidatorDirective } from './form-validation/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './form-validation/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './form-validation/async';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TemplateFormComponent,
    FormValidationComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
