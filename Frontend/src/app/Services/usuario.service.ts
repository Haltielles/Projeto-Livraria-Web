import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Retorno } from '../Services/Retorno';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  validaUsuario(login: string, senha: string): Observable<Retorno> {
    return this.http.get<Retorno>('http://localhost:8000/api/livraria/usuario/valida/' + login + ',' + senha);
  }

  getUsuario(email: string): Observable<Usuario> {
    return this.http.get<Usuario>('http://localhost:8000/api/livraria/usuario/get/' + email);
  }

  insertUsuario(usuario: Usuario): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/livraria/usuario/insert/', usuario);
  }

  updateUsuario(usuario: Usuario): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/livraria/usuario/update/' + usuario.custID, usuario);
  }

  deleteUsuario(id: string): Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livraria/usuario/remove/' + id);
  }
}
