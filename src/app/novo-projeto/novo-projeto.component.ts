import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { ProjetoApiService } from '../service/projeto-api.service';
@Component({
  selector: 'has-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {
  
  formProjeto : FormGroup;

  constructor(public FormBuilder : FormBuilder, public service : ProjetoApiService ) { }

  ngOnInit() {
    this.formProjeto = this.FormBuilder.group({
       Turma : this.FormBuilder.control(''),
       Sala : this.FormBuilder.control(''),
       Orientadores : this.FormBuilder.control(''),
       Nome : this.FormBuilder.control('')
   })
  }
}
