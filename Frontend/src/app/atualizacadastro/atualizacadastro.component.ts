import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';
import { Usuario } from '../Services/usuario';
import { Retorno } from '../Services/Retorno';
import { EmailsenderService } from '../Services/emailsender.service';
import { CompraService } from '../Services/compra.service';
import { Compra } from '../Services/compra';

@Component({
  selector: 'app-atualizacadastro',
  templateUrl: './atualizacadastro.component.html',
  styleUrls: ['./atualizacadastro.component.css']
})
export class AtualizacadastroComponent implements OnInit {
  emailRepassado: string;
  usuarioID: string;
  usuarioNome: string;
  usuarioEmail: string;
  usuario = new Usuario();
  retorno: Retorno;
  btoCadastrar: string;
  conteudocompra = new Compra();

  constructor(private route: ActivatedRoute, private servUser: UsuarioService, private rota: Router, private emailSend: EmailsenderService, private gravaCompra: CompraService) {
  }

  ngOnInit() {
    this.usuarioID = localStorage.getItem('userID');
    this.usuarioNome = localStorage.getItem('userName');
    this.usuarioEmail = localStorage.getItem('email');
    if (this.usuarioID !== null) {
      this.servUser.getUsuario(this.usuarioEmail).subscribe(itens => {
        this.usuario = itens;
        document.getElementById('historico').setAttribute('disable', 'false');
        this.btoCadastrar = 'Atualizar Cadastro e Finalizar Compra';
      });
    } else {
      this.btoCadastrar = 'Cadastrar';
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
    if (this.usuarioID !== null) {
      this.servUser.updateUsuario(this.usuario).subscribe(retorno => {
        this.retorno = retorno;
        this.conteudocompra.id_usuario = this.usuario.custID;
        this.conteudocompra.id_carrinho = Number.parseInt(localStorage.getItem('myCar'), 10);
        this.conteudocompra.frete = Number.parseInt(localStorage.getItem('frete'), 10);
        this.conteudocompra.valortotal = Number.parseInt(localStorage.getItem('totalCompra'), 10);
        this.gravaCompra.insertCompra(this.conteudocompra).subscribe(retorno2 => {
          this.retorno = retorno2;
          this.emailSend.sendEmail(this.usuario.email, (this.usuario.fname + ' ' + this.usuario.lname), 1, Number.parseFloat(localStorage.getItem('totalCompra'))).subscribe(retorno => {
            this.retorno = retorno;
            this.rota.navigate(['fecharcompra']);
          });
        });
      });
    } else {
      this.servUser.insertUsuario(this.usuario).subscribe(retorno => {
        this.retorno = retorno;
        this.conteudocompra.id_usuario = this.usuario.custID;
        this.conteudocompra.id_carrinho = Number.parseInt(localStorage.getItem('myCar'), 10);
        this.conteudocompra.frete = Number.parseInt(localStorage.getItem('frete'), 10);
        this.conteudocompra.valortotal = Number.parseInt(localStorage.getItem('totalCompra'), 10);
        this.gravaCompra.insertCompra(this.conteudocompra).subscribe(retorno2 => {
          this.retorno = retorno2;
          this.emailSend.sendEmail(this.usuario.email, (this.usuario.fname + ' ' + this.usuario.lname), 1, Number.parseFloat(localStorage.getItem('totalCompra'))).subscribe(retorno => {
            this.retorno = retorno;
            this.rota.navigate(['fecharcompra']);
          });
        });
      });
    }
  }
}
