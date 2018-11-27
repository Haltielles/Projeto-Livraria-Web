import { Component, OnInit } from '@angular/core';
import { ListaItem } from './listaitem';
import { Bookdescription } from '../Services/bookdescription';
import { BookdescriptionService } from '../Services/bookdescription.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent {
  public a: Bookdescription;
  itensBase: Bookdescription[];
  itens = new Array<ListaItem>();

  constructor(private servBookDesk: BookdescriptionService) {
  }

  ngOnInit() {
    this.servBookDesk.getBooksDescriptions().subscribe(itens => {
      this.itensBase = itens;
      for (let entry of itens) {
        this.itens.push(new ListaItem(entry.ISBN, entry.title, [], entry.description, entry.price, entry.publisher, entry.pubdate, entry.edition, entry.pages));
      }
    });

  }

  descricaoResumida(descricao: String): String {
    return descricao.substr(0, 50);
  }
}
