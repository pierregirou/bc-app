import { Component } from '@angular/core';

@Component({
  selector: 'app-addtemplate',
  template: `
    <h2>Add Template</h2>
    <app-formtemplate [template]="newTemplate"></app-formtemplate>
  `,
  styleUrls: ['./addtemplate.component.css']
})
export class AddtemplateComponent {
  /***
   * Pour initialiser le form avec des valeurs vide !
   */
  newTemplate = {
    title:'',
    template:'',
    comment:''
  }
}
