import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public Editor = ClassicEditor;
  data:any;

  ngOnInit(){
    this.data = `
      <p>TEST</p>
    `
  }
}
