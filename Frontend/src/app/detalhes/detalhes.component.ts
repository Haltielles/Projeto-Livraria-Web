import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { EspecialqueryService } from '../Services/especialquery.service';
import { Livro } from '../Services/especialquery';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {
  isbnRepassado: string;
  itemDetalhe = new Array<Livro>();

  constructor(private route: ActivatedRoute, private especialQuery: EspecialqueryService) {
  }

  ngOnInit() {
    this.isbnRepassado = this.route.snapshot.paramMap.get('isbn');
    this.especialQuery.bookDescribe(this.isbnRepassado).subscribe(itens => {
      this.itemDetalhe = itens;
      console.log(this.itemDetalhe);
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
