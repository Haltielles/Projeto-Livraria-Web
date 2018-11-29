import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bookcategoriebook } from './bookcategoriebook';
import { Retorno } from '../Services/Retorno';

@Injectable({
  providedIn: 'root'
})
export class BookcategoriebookService {

  constructor(private http: HttpClient) { }

  getBookCategorieBook(isbn: string): Observable<Bookcategoriebook[]> {
    return this.http.get<Bookcategoriebook[]>('http://localhost:8000/api/livraria/bookcategoriebook/get/' + isbn);
  }

  insertBookCategorieBook(bookcategoriebook: Bookcategoriebook): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/livraria/bookcategoriebook/insert/', bookcategoriebook);
  }

  updateBookCategorieBook(bookcategoriebook: Bookcategoriebook): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/livraria/bookcategoriebook/update/' + bookcategoriebook.ISBN, bookcategoriebook);
  }

  deleteBookCategorieBook(isbn: string): Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livraria/bookcategoriebook/remove/' + isbn);
  }
}
