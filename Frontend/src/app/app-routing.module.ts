import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { isBoolean } from 'util';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FecharcompraComponent } from './fecharcompra/fecharcompra.component';
import { ListabuscaComponent } from './listabusca/listabusca.component';
import { AtualizacadastroComponent } from './atualizacadastro/atualizacadastro.component';
import { EquipeComponent } from './equipe/equipe.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'detalhes/:isbn/carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'detalhes/:isbn',
    component: DetalhesComponent
  },
  {
    path: 'cadastro/:email',
    component: CadastroComponent
  },
  {
    path: 'equipe',
    component: EquipeComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'atualizacadastro',
    component: AtualizacadastroComponent
  },
  {
    path: 'fecharcompra',
    component: FecharcompraComponent
  },
  {
    path: 'listabusca/:tipo/:id',
    component: ListabuscaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
