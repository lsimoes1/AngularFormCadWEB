import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html',
  styleUrls: ['./form-consulta.component.css']
})

export class FormConsultaComponent {

  pessoa: object[] = [];
  filter: string = '';

  configUrl = 'https://localhost:5001/api/consulta/' + this.filter;

  constructor(private http: HttpClient) { }

  consulta() {
    this.http.get<object[]>(this.configUrl)
    .subscribe(usuario => this.pessoa = usuario );
  }
}
