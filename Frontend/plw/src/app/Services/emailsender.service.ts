import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Retorno } from '../Services/Retorno';

@Injectable({
  providedIn: 'root'
})
export class EmailsenderService {

  constructor(private http: HttpClient) { }

  sendEmail(email: string, login: string, idcompra: number, valortotal: number): Observable<Retorno> {
    return this.http.get<Retorno>('http://localhost:8000/api/livraria/sendemail/' + email + ',' + login + ',' + idcompra + ',' + valortotal);
  }
}
