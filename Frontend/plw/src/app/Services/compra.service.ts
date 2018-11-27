import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Compra } from './compra';
import { Retorno } from '../Services/Retorno';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  getCompraId(id: string): Observable<Compra[]> {
    return this.http.get<Compra[]>('http://localhost:8000/api/livraria/compra/get/' + id);
  }

  getCompraUsuarioId(id: string): Observable<Compra[]> {
    return this.http.get<Compra[]>('http://localhost:8000/api/livraria/compra/getusuario/' + id);
  }

  getCompraCarrinhoId(id: string): Observable<Compra[]> {
    return this.http.get<Compra[]>('http://localhost:8000/api/livraria/compra/getucarrinho/' + id);
  }

  insertCompra(compra: Compra): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/livraria/compra/insert/', compra);
  }

  updateCompra(compra: Compra): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/livraria/compra/update/' + compra.id_compra, compra);
  }

  deleteCompra(id: string): Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livraria/compra/remove/' + id);
  }
}
