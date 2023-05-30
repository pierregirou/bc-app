import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-edittemplate',
  template: `
    <h2>Edit Template</h2>
    <app-formtemplate [template]="getTemplate"></app-formtemplate>
  `,
  styleUrls: ['./edittemplate.component.css']
})
export class EdittemplateComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute)
  templateService = inject(TemplateService)
  getIdParamUrl:any
  getTemplate : any
  ngOnInit(){
    this.getIdParamUrl = this.activatedRoute.snapshot.paramMap.get('index')
    if(this.getIdParamUrl)
    this.getTemplate = this.templateService.getTemplateById(+this.getIdParamUrl)
    console.log(this.getTemplate)
  }
}
