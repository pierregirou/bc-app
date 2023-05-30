import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddtemplateComponent } from "./addtemplate/addtemplate.component";
import { EdittemplateComponent } from "./edittemplate/edittemplate.component";

const routesTemplate :Routes = [
    {path:'template/add', component:AddtemplateComponent},
    {path:'template/edit/:index', component: EdittemplateComponent}
]


@NgModule({
    imports:[RouterModule.forChild(routesTemplate)],
    exports:[RouterModule]
})

export class TemplateRoutingModule{}