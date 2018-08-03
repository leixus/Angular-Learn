import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
        path: '',
        component: LayoutComponent,
        children:
        [
            {
                path: 'form',
                loadChildren: './form/form.module#FormModule'
            },
            {
                path: 'template-driven-form',
                loadChildren: './template-driven-form/template-driven-form.module#TemplateDrivenFormModule'
            },
            {
                path: 'form-validation',
                loadChildren: './form-validation/form-validation.module#FormValidationModule'
            },
            {
                path: 'reactive-form',
                loadChildren: './reactive-form/reactive-form.module#ReactiveFormModule'
            },
            {
                path: 'dynamic',
                loadChildren: './dynamic/dynamic.module#DynamicModule'
            },
            {
                path: 'attributeDirectives',
                loadChildren: './attributeDirectives/attributeDirectives.module#AttributeDirectivesModule'
            },
            {
                path: 'structuralDirectives',
                loadChildren: './structuralDirectives/structuralDirectives.module#StructuralDirectivesModule'
            },
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
