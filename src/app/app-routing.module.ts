import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { DetalheProjetoComponent } from './detalhe-projeto/detalhe-projeto.component';
import { NovoProjetoComponent } from './novo-projeto/novo-projeto.component';
import { EditarProjetoComponent } from './editar-projeto/editar-projeto.component';

const routes: Routes = [
{ path:'listaProjetos',
  component:ListaProjetosComponent
},
{ path:'detalheProjeto/:id',
  component:DetalheProjetoComponent
},
{ path:'novoProjeto',
  component:NovoProjetoComponent
},
{ path:'editarProjeto',
  component:EditarProjetoComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
