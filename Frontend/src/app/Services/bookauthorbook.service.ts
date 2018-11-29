import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bookauthorbook } from './bookauthorbook';
import { Retorno } from '../Services/Retorno';

@Injectable({
  providedIn: 'root'
})
export class BookauthorbookService {

  constructor(private http: HttpClient) { }

  getBookAuthorBook(isbn: string): Observable<Bookauthorbook[]> {
    return this.http.get<Bookauthorbook[]>('http://localhost:8000/api/livraria/bookauthorbook/get/' + isbn);
  }

  insertBookAuthorBook(bookauthorbook: Bookauthorbook): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/livraria/bookauthorbook/insert/', bookauthorbook);
  }

  updateBookAuthorBook(bookauthorbook: Bookauthorbook): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/livraria/bookauthorbook/update/' + bookauthorbook.ISBN, bookauthorbook);
  }

  deleteBookAuthorBook(isbn: string): Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livraria/bookauthorbook/remove/' + isbn);
  }
}
