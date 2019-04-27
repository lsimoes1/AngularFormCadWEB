import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormCadComponent } from './form-cad/form-cad.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormConsultaComponent } from './form-consulta/form-consulta.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cad', component: FormCadComponent },
  { path: 'home', component: FormHomeComponent },
  { path: 'consulta', component: FormConsultaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormCadComponent,
    FormHomeComponent,
    HeaderComponent,
    FormConsultaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
