import { Component } from '@angular/core';
import { ListaItem } from '../lista/listaitem';
import { Bookdescription } from '../Services/bookdescription';
import { EspecialqueryService } from '../Services/especialquery.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {
  public a: Bookdescription;
  itensBase: Bookdescription[];
  itens = new Array<ListaItem>();

  constructor(private especialQuery: EspecialqueryService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.especialQuery.bookDescribe('0131428985').subscribe(itens => {
      this.itensBase = itens;
      console.log(this.itensBase);
      // tslint:disable-next-line:prefer-const
      for (let entry of itens) {
        this.itens.push(new ListaItem(entry.ISBN, entry.title, ['test', 'domingo'], entry.description, entry.price, entry.publisher, entry.pubdate, entry.edition, entry.pages));
      }
    });
  }

  precoPromocional(preco: number): string {
    return (preco * 0.9).toFixed(2);
  }

  desconto(preco: number): string {
    // tslint:disable-next-line:prefer-const
    let desconto = 0.9;
    return (preco - (preco * desconto)).toFixed(2) + ' - Save: ' + ((1 - desconto) * 100).toFixed(2) + '%';
  }

}
