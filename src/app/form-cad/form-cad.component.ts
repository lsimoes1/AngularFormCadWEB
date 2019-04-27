import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDayPeriods } from '@angular/common';

@Component({
  selector: 'app-form-cad',
  templateUrl: './form-cad.component.html',
  styleUrls: ['./form-cad.component.css']
})

export class FormCadComponent{

  constructor(private http: HttpClient) { }

  nome: string = '';
  sobrenome: string = '';
  cidade: string = '';
  estado: string = '';
  cep: string = '';

  cadastrar(){

    const url = 'https://localhost:5001/api/Cadastrar/';

    this.http.post(url,
        {
          nome: this.nome,
          sobrenome: this.sobrenome,
          cidade: this.cidade,
          estado: this.estado,
          cep: this.cep
        }).subscribe((data:any) => console.log(data));

  }
}
