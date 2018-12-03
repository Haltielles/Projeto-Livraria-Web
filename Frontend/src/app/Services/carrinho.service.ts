import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Carrinho } from './carrinho';
import { Retorno } from '../Services/Retorno';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient) { }

  getMaxCarrinho(): Observable<Carrinho> {
    return this.http.get<Carrinho>('http://localhost:8000/api/livraria/carrinho/getmax/');
  }

  getCarrinhoId(id: number): Observable<Carrinho[]> {
    return this.http.get<Carrinho[]>('http://localhost:8000/api/livraria/carrinho/get/' + id);
  }

  getCarrinhoIsbn(isbn: string): Observable<Carrinho[]> {
    return this.http.get<Carrinho[]>('http://localhost:8000/api/livraria/carrinho/getisbn/' + isbn);
  }

  getCarrinhoUsuarioId(id: number): Observable<Carrinho[]> {
    return this.http.get<Carrinho[]>('http://localhost:8000/api/livraria/carrinho/getusuario/' + id);
  }

  insertCarrinho(carrinho: Carrinho): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/livraria/carrinho/insert/', carrinho);
  }

  updateCarrinho(carrinho: Carrinho): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/livraria/carrinho/update/' + carrinho.id + ',' + carrinho.ISBN, carrinho);
  }

  deleteCarrinho(id: number): Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livraria/carrinho/removecarrinho/' + id);
  }

  deleteItemCarrinho(id: number, isbn: string): Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livraria/carrinho/removeitemcarrinho/' + id + ',' + isbn);
  }
}
