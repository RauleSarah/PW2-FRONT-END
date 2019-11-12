import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoApiService } from '../service/projeto-api.service';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {
  projetos  = [];

  constructor(private router : Router, private service : ProjetoApiService) { }
  ngOnInit() {
    this.service.getProjetos().subscribe((dados : Projeto[]) => this.projetos = data, error => console.log (error) );
  }
  detalhes(id:number){
    this.router.navigate(['detalheProjeto',id]);
  }
}
