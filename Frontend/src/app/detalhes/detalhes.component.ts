import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EspecialqueryService } from '../Services/especialquery.service';
import { Livro } from '../Services/especialquery';
import { CarrinhoService } from '../Services/carrinho.service';
import { Carrinho } from '../Services/carrinho';
import { Retorno } from '../Services/Retorno';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  isbnRepassado: string;
  itemDetalhe = new Livro();
  nroCarrinho: string;
  carrinhoItens = new Carrinho();
  retorno: Retorno;

  constructor(private route: ActivatedRoute, private especialQuery: EspecialqueryService, private carrinhoService: CarrinhoService) {
  }

  ngOnInit() {
    this.isbnRepassado = this.route.snapshot.paramMap.get('isbn');
    this.especialQuery.bookDescribe(this.isbnRepassado).subscribe(itens => {
      this.itemDetalhe = itens;
    });
  }

  precoPromocional(preco: number): string {
    return (preco * 0.9).toFixed(2);
  }

  desconto(preco: number): string {
    let desconto = 0.9;
    return (preco - (preco * desconto)).toFixed(2) + ' - Save: ' + ((1 - desconto) * 100).toFixed(2) + '%';
  }

  adicionaCarrinho() {
    if (localStorage.getItem('myCar') === '') {
      this.carrinhoService.getMaxCarrinho().subscribe(numero => {
        localStorage.setItem('myCar', (numero.id + 1).toString());
        this.carrinhoItens.id = (numero.id + 1);
        this.carrinhoItens.titulo = this.itemDetalhe.title;
        this.carrinhoItens.ISBN = this.itemDetalhe.ISBN;
        this.carrinhoItens.quantidade = 1;
        this.carrinhoItens.valorunidade = this.itemDetalhe.price;
        this.carrinhoItens.usuario_id = 0;
        this.carrinhoService.insertCarrinho(this.carrinhoItens).subscribe(retorno => {
          this.retorno = retorno;
          window.location.reload();
        });
      });
    } else {
      this.carrinhoItens.id = parseInt(localStorage.getItem('myCar'), 10);
      this.carrinhoItens.titulo = this.itemDetalhe.title;
      this.carrinhoItens.ISBN = this.itemDetalhe.ISBN;
      this.carrinhoItens.quantidade = 1;
      this.carrinhoItens.valorunidade = this.itemDetalhe.price;
      this.carrinhoItens.usuario_id = 0;

      this.carrinhoService.insertCarrinho(this.carrinhoItens).subscribe(retorno => {
        this.retorno = retorno;
        window.location.reload();
      });
    }

  }
}
