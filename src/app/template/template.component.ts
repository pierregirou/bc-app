import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public Editor = ClassicEditor;
  data:any;
  arrayTemplate: any[];
  visibility :boolean = true
  panelOpenState :boolean = true
  ngOnInit(){
    this.data = `
      <h2>Template 1</h2>
      <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard.</p>
      <p> Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.</p>
    `;
    this.arrayTemplate = [
      {
        id:1,
        template:`<h2>Template 1</h2>
        <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard.</p>
        <p style="color:red"> Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.</p>`,
        title: 'Template 1',
        mode: '0',
        comment:' je suis le commentaire du template 1'
      },
      {
        id:2,
        template:`<h2>Template 2</h2>
        <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard.</p>
        <p> Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.</p>`,
        title: 'Template 2',
        mode: '0',
        comment:' je suis le commentaire du template 2'
      },
      {
        id:3,
        template:`<h2>Template 3</h2>
        <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard.</p>
        <p> Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.</p>`,
        title: 'Template 3',
        mode: '1',
        comment:''
      }
     ]
  }

  openTemplate(){
    this.visibility = false
  }

  onSubmit(myForm: NgForm){
    this.arrayTemplate.push(
      {
        id: this.arrayTemplate.length+1,
        template:myForm.value.content,
        title:myForm.value.title,
        mode:0,
        comment:myForm.value.comment
      })

    this.visibility = true
  }
}
