import { Component, OnInit } from '@angular/core';
import { EspecialqueryService } from '../Services/especialquery.service';
import { Livro } from '../Services/especialquery';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  itensAll = new Array<Livro>();
  itensTelaInicial = new Array<Livro>();

  constructor(private especialQuery: EspecialqueryService) {
  }
  ngOnInit() {
    this.especialQuery.allBooks().subscribe(itens => {
      this.itensAll = itens;
      this.listaAleatoria();
    });
  }

  listaAleatoria() {
    let aleatorio1 = Math.floor(Math.random() * this.itensAll.length);
    this.itensTelaInicial.push(this.itensAll[aleatorio1]);
    this.itensAll.splice(aleatorio1, 1);

    let aleatorio2 = Math.floor(Math.random() * this.itensAll.length);
    this.itensTelaInicial.push(this.itensAll[aleatorio2]);
    this.itensAll.splice(aleatorio2, 1);

    let aleatorio3 = Math.floor(Math.random() * this.itensAll.length);
    this.itensTelaInicial.push(this.itensAll[aleatorio3]);
    this.itensAll.splice(aleatorio3, 1);

    this.itensAll.push(this.itensTelaInicial[0]);
    this.itensAll.push(this.itensTelaInicial[1]);
    this.itensAll.push(this.itensTelaInicial[2]);
  }

  descricaoResumida(descricao: String): String {
    let tamanho: number;
    let ultimaLetra: string;
    tamanho = 550;
    ultimaLetra = descricao.substr(tamanho, 1);
    for (let a = tamanho; ultimaLetra !== ' '; a++) {
      ultimaLetra = descricao.substr(a, 1);
      tamanho = a;
    }
    return descricao.substring(0, tamanho);
  }
}

