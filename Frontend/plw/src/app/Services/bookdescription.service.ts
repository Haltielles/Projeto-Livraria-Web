import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bookdescription } from './bookdescription';
import { Retorno } from '../Services/Retorno';

@Injectable({
  providedIn: 'root'
})
export class BookdescriptionService {

  constructor(private http: HttpClient) { }

  getBooksDescriptions(): Observable<Bookdescription[]> {
    return this.http.get<Bookdescription[]>('http://localhost:8000/api/livraria/bookdescription/get/all');
  }

  getBookDescription(isbn: string): Observable<Bookdescription[]> {
    return this.http.get<Bookdescription[]>('http://localhost:8000/api/livraria/bookdescription/get/' + isbn);
  }

  insertBookDescription(bookdescription: Bookdescription): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/livraria/bookdescription/insert/', bookdescription);
  }

  updateBookDescription(bookdescription: Bookdescription): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/livraria/bookdescription/update/' + bookdescription.ISBN, bookdescription);
  }

  deleteBookDescription(isbn: string):Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livraria/bookdescription/remove/' + isbn);
  }
}
