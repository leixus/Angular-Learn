import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttributeDirectivesComponent} from './attributeDirectives.component';


const routes: Routes = [
    {
        path: '',
        component: AttributeDirectivesComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AttributeDirectivesRoutingModule {}
