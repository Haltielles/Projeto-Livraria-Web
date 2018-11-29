import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';
import { Usuario } from '../Services/usuario';
import { Retorno } from '../Services/Retorno';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  emailRepassado: string;
  usuarioID: string;
  usuarioNome: string;
  usuarioEmail: string;
  usuario = new Usuario();
  retorno: Retorno;
  btoCadastrar: string;

  constructor(private route: ActivatedRoute, private servUser: UsuarioService, private rota: Router) {
  }

  ngOnInit() {
    this.usuarioID = localStorage.getItem('userID');
    this.usuarioNome = localStorage.getItem('userName');
    this.usuarioEmail = localStorage.getItem('email');
    if (this.usuarioID !== '') {
      this.servUser.getUsuario(this.usuarioEmail).subscribe(itens => {
        this.usuario = itens;
        document.getElementById('historico').setAttribute('disable', 'false');
        this.btoCadastrar = 'Atualizar Cadastro e Finalizar Compra';
      });
    } else {
      this.btoCadastrar = 'Cadastrar e Finalizar Compra';
    }
  }

  confirmarCadastro(first_name: string, last_name: string, email: string, street: string, city: string, state: string, zip: string) {
    this.usuario.fname = first_name;
    this.usuario.lname = last_name;
    this.usuario.email = email;
    this.usuario.street = street;
    this.usuario.city = city;
    this.usuario.state = state;
    this.usuario.zip = zip;
    if (this.usuarioID !== '') {
    } else {
      this.servUser.insertUsuario(this.usuario).subscribe(retorno => { this.retorno = retorno; });
    }
    this.rota.navigate(['finalizarcompra']);
  }
}
