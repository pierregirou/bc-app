import { Component, inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { mockTemplate } from '../mock.template';

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent implements OnInit{
  @Input('template') template:any
  data:any;
  arrayTemplate: any[];
  visibility :boolean = true
  public Editor = ClassicEditor;
  router = inject(Router)

  ngOnInit(): void {
    this.arrayTemplate = mockTemplate
    console.log(this.template)
  }

  onSubmit(myForm: NgForm){
    console.log("submit")
    this.arrayTemplate.push(
      {
        id: this.arrayTemplate.length+1,
        template:myForm.value.content,
        title:myForm.value.title,
        mode:0,
        comment:myForm.value.comment
      })
  }

  annuleSaisie(){
    this.router.navigate(['template'])
  }
}
