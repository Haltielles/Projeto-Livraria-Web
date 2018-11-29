import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { Usuario } from '../Services/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  retorno: Usuario;

  constructor(private usuarioService: UsuarioService, private rota: Router) { }

  ngOnInit() {
  }

  validarEmail(email: string) {
    this.usuarioService.getUsuario(email).subscribe(itens => {
      this.usuario = itens;
      localStorage.setItem('userID', this.usuario.custID.toString());
      localStorage.setItem('userName', (this.usuario.fname + ' ' + this.usuario.lname));
      if (this.usuario.email === '') {
        this.rota.navigate(['cadastro']);
      } else {
        this.rota.navigate(['fecharcompra']);
      }
    });
  }
}
