import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ListaComponent } from './lista/lista.component';
import { LoginComponent } from './login/login.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { BookdescriptionService } from './Services/bookdescription.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FecharcompraComponent } from './fecharcompra/fecharcompra.component';
import { ListabuscaComponent } from './listabusca/listabusca.component';
import { AtualizacadastroComponent } from './atualizacadastro/atualizacadastro.component';
import { EquipeComponent } from './equipe/equipe.component';
import { LoginfecharComponent } from './loginfechar/loginfechar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ConteudoComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MenuComponent,
    CarrinhoComponent,
    ListaComponent,
    LoginComponent,
    DetalhesComponent,
    CadastroComponent,
    FecharcompraComponent,
    ListabuscaComponent,
    AtualizacadastroComponent,
    EquipeComponent,
    LoginfecharComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookdescriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
