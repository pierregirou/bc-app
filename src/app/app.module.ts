import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TemplateComponent } from './template/template.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormControl } from '@angular/forms';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ErrorComponent,
    FaqComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    SidenavComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    TemplateModule,
    AppRoutingModule,
    CKEditorModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
