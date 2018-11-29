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
  usuario = new Usuario();
  retorno: Retorno;

  constructor(private route: ActivatedRoute, private servUser: UsuarioService, private rota: Router) {
  }

  ngOnInit() {
    this.usuarioID = localStorage.getItem('userID');
    this.usuarioNome = localStorage.getItem('userName');
    //this.emailRepassado = this.route.snapshot.paramMap.get('email');
  }

  confirmarCadastro(first_name: string, last_name: string, email: string, street: string, city: string, state: string, zip: string) {
    this.usuario.fname = first_name;
    this.usuario.lname = last_name;
    this.usuario.email = email;
    this.usuario.street = street;
    this.usuario.city = city;
    this.usuario.state = state;
    this.usuario.zip = zip;
    this.servUser.insertUsuario(this.usuario).subscribe(retorno => { this.retorno = retorno; });
    this.rota.navigate(['cadastro/' + email]);
  }
}
