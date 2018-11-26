import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookCategory } from './bookcategory';

@Injectable({
  providedIn: 'root'
})
export class BookcategoryService {

  constructor(private http: HttpClient) { }

  getUsuarioLogin(id: string): Observable<BookCategory[]> {
    return this.http.get<BookCategory[]>('http://localhost:8000/api/livraria/getcategory/' + id);
  }
}
