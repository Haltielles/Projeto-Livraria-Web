import { Component, OnInit } from '@angular/core';
import { ListaItem } from '../lista/listaitem';
import { ItensCarrinho } from '../carrinho/ItensCarrinho';
import { Bookdescription } from '../Services/bookdescription';
import { BookdescriptionService } from '../Services/bookdescription.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  public a: Bookdescription;
  itensBase: Bookdescription[];
  itens = new Array<ListaItem>();
  itensCar = new Array<ItensCarrinho>();

  constructor(private servBookDesk: BookdescriptionService) {
  }

  ngOnInit() {
    this.servBookDesk.getBooksDescriptions().subscribe(itens => {
      this.itensBase = itens;
      for (let entry of itens) {
        this.itens.push(new ListaItem(entry.ISBN, entry.title, ['test', 'domingo'], entry.description, entry.price, entry.publisher, entry.pubdate, entry.edition, entry.pages));
      }
    });
  }

  insereItem(item: ListaItem) {
    this.itensCar.push(new ItensCarrinho(item.isbn, item.title, item.price, 1));
  }

  retiraItem(ISBN: number) {
    this.itensCar.splice(3, 1);
  }

}
