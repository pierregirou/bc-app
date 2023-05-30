import { Injectable } from '@angular/core';
import { mockTemplate } from '../mock.template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  getAllTemplate(){
    return mockTemplate
  }

  getTemplateById(idTemplate:number){
    return mockTemplate.filter((item)=>item.id == idTemplate)[0]
  }

  addTemplate(template:any){
    mockTemplate.push(template)
  }

  updateTemplate(idTemplate:number){}

  removeTemplate(idTemplate:number){
    mockTemplate.splice(idTemplate,1)
  }
}
