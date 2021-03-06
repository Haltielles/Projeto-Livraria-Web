import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookCategory } from './bookcategory';
import { Retorno } from '../Services/Retorno';

@Injectable({
  providedIn: 'root'
})
export class BookcategoryService {

  constructor(private http: HttpClient) { }
  getAllBookCategory(): Observable<BookCategory[]> {
    return this.http.get<BookCategory[]>('http://localhost:8000/api/livraria/bookcategory/getall');
  }
  getBookCategory(id: string): Observable<BookCategory[]> {
    return this.http.get<BookCategory[]>('http://localhost:8000/api/livraria/bookcategory/get/' + id);
  }

  insertBookCategory(bookcategory: BookCategory): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/livraria/bookcategory/insert/', bookcategory);
  }

  updateBookCategory(bookcategory: BookCategory): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/livraria/bookcategory/update/' + bookcategory.CategoryID, bookcategory);
  }

  deleteBookCategory(id: string): Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livraria/bookcategory/remove/' + id);
  }
}
