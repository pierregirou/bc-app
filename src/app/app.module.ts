import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TemplateComponent } from './template/template.component';
import { FaqComponent } from './faq/faq.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    TemplateComponent,
    FaqComponent,
    ErrorComponent,
    LoginComponent,
    SearchComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
