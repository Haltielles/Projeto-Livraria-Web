import { Component, OnInit } from '@angular/core';
import { ListaItem } from '../lista/listaitem';
import { Bookdescription } from '../Services/bookdescription';
import { BookdescriptionService } from '../Services/bookdescription.service';
import { BookauthorService } from  '../Services/bookauthor.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {
  public a: Bookdescription;
  itensBase: Bookdescription[];
  itens = new Array<ListaItem>();

  constructor(private servBookDesk: BookdescriptionService) {
  }

  ngOnInit() {
    this.servBookDesk.getBooksDescriptions().subscribe(itens => {
      this.itensBase = itens;
      console.log(this.itensBase);
      for (let entry of itens) {
        this.itens.push(new ListaItem(entry.ISBN, entry.title, ['test'], entry.description, entry.price, entry.publisher, entry.pubdate, entry.edition, entry.pages));
      }
    });

  }

  precoPromocional(preco: number): string {
    return (preco * 0.9).toFixed(2);
  }

  desconto(preco: number): string {
    let desconto = 0.9;
    return (preco - (preco * desconto)).toFixed(2) + ' - Save: ' + ((1 - desconto) * 100).toFixed(2) + '%';
  }

}
