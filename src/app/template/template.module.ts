import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdittemplateComponent } from './edittemplate/edittemplate.component';
import { AddtemplateComponent } from './addtemplate/addtemplate.component';
import { TemplateRoutingModule } from './template-routing.module';
import { FormtemplateComponent } from './formtemplate/formtemplate.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SafeHtmlPipe } from '../pipe/safe-html.pipe';
import { TemplateService } from './services/template.service';

@NgModule({
  declarations: [
    EdittemplateComponent,
    AddtemplateComponent,
    FormtemplateComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    MaterialModule,
    TemplateRoutingModule
  ],
  providers:[
    TemplateService
  ]
})
export class TemplateModule { }
