import { Component, OnInit } from '@angular/core';
import { EspecialqueryService } from '../Services/especialquery.service';
import { Livro } from '../Services/especialquery';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent {
  itens = new Array<Livro>();
  itensTelaInicial = new Array<Livro>();

  constructor(private especialQuery: EspecialqueryService) {
  }
  ngOnInit() {
    //this.especialQuery.bookDescribe("ISBN != ''").subscribe(itens => {
    //  this.itens = itens;
    //});

    //this.listaAleatoria();
  }




  /*    this.servBookDesk.getBooksDescriptions().subscribe(itens => {
        this.itensBase = itens;
        for (let entry of itens) {
          this.itens.push(new ListaItem(entry.ISBN, entry.title, ['test', 'domingo'], entry.description, entry.price, entry.publisher, entry.pubdate, entry.edition, entry.pages));
        }
  */

  listaAleatoria() {
    let aleatorio1 = Math.floor(Math.random() * this.itens.length);
    this.itensTelaInicial.push(this.itens[aleatorio1]);
    this.itens.splice(aleatorio1, 1);

    let aleatorio2 = Math.floor(Math.random() * this.itens.length);
    this.itensTelaInicial.push(this.itens[aleatorio2]);
    this.itens.splice(aleatorio2, 1);

    let aleatorio3 = Math.floor(Math.random() * this.itens.length);
    this.itensTelaInicial.push(this.itens[aleatorio3]);
    this.itens.splice(aleatorio3, 1);

    this.itens.push(this.itensTelaInicial[0]);
    this.itens.push(this.itensTelaInicial[1]);
    this.itens.push(this.itensTelaInicial[2]);
  }

  descricaoResumida(descricao: String): String {
    return descricao.substr(0, 550);
  }
}

