import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bookauthor } from './bookauthor';
import { Retorno } from '../Services/Retorno';

@Injectable({
  providedIn: 'root'
})
export class BookauthorService {

  constructor(private http: HttpClient) { }

  getBookAuthor(id: string): Observable<Bookauthor[]> {
    return this.http.get<Bookauthor[]>('http://localhost:8000/api/livraria/bookauthor/get/' + id);
  }

  insertBookAuthor(bookauthor: Bookauthor): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/livraria/bookauthor/insert/', bookauthor);
  }

  updateBookAuthor(bookauthor: Bookauthor): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/livraria/bookauthor/update/' + bookauthor.AuthorID, bookauthor);
  }

  deleteBookAuthor(id: string): Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livraria/bookauthor/remove/' + id);
  }
}
