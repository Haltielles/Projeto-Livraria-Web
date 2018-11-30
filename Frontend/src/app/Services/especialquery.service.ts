import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Livro } from './especialquery';

@Injectable({
  providedIn: 'root'
})
export class EspecialqueryService {

  constructor(private http: HttpClient) { }

  allBooks(): Observable<Livro[]> {
    return this.http.get<Livro[]>('http://localhost:8000/api/livraria/allbooks/');
  }
  carrinhoSCompra(id: string): Observable<Livro> {
    return this.http.get<Livro>('http://localhost:8000/api/livraria/carrinhoscompra/' + id);
  }
  bookDescribe(isbn: string): Observable<Livro> {
    return this.http.get<Livro>('http://localhost:8000/api/livraria/bookdescribe/' + isbn);
  }
  bookAuthor(id: string): Observable<Livro[]> {
    return this.http.get<Livro[]>('http://localhost:8000/api/livraria/bookauthor/' + id);
  }
  bookCategoria(id: string): Observable<Livro[]> {
    return this.http.get<Livro[]>('http://localhost:8000/api/livraria/bookcategorie/' + id);
  }
}
