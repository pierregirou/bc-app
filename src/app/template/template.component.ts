import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TemplateService } from './services/template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public Editor = ClassicEditor;
  router = inject(Router)
  templateService = inject(TemplateService)
  arrayTemplate: any;
  panelOpenState :boolean = true

  ngOnInit(){
    this.arrayTemplate = this.templateService.getAllTemplate()
  }

  editTemplate(template:any){
    if(template)
    this.router.navigate([`template/edit/${template.id}`])
  }

  deleteTemplate(template: unknown){
    console.log(template)
  }
}
