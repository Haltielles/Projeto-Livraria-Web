import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../Services/carrinho';
import { CarrinhoService } from '../Services/carrinho.service';
import { Router } from '@angular/router';
import { isNull } from 'util';
import { Retorno } from '../Services/Retorno';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCar = new Array<Carrinho>();
  itensCarCalc = new Array<Carrinho>();
  subtotal: number;
  frete: number;
  total: number;
  usuarioID: string;
  usuarioNome: string;
  retorno: Retorno;
  nroCarrinho: number;

  constructor(private carrinhoService: CarrinhoService, private rota: Router) {
  }

  ngOnInit() {
    this.usuarioID = localStorage.getItem('userID');
    this.usuarioNome = localStorage.getItem('userName');
    this.nroCarrinho = Number.parseInt(localStorage.getItem('myCar'), 10);
    this.carrinhoService.getCarrinhoId(this.nroCarrinho).subscribe(itens => {
      this.itensCar = itens;
      this.subtotal = this.subtotalCalculado();
      this.frete = this.freteCalculado();
      this.total = this.totalCalculado();
      localStorage.setItem('totalCompra', this.total.toString());
    });
  }

  retiraItem(id: number, ISBN: string) {
    this.carrinhoService.deleteItemCarrinho(id, ISBN).subscribe(retorno => {
      this.retorno = retorno;
      window.location.reload();
    });
  }

  alteraQtdeMais(item: Carrinho) {
    item.quantidade++;
    this.carrinhoService.updateCarrinho(item).subscribe(retorno => {
      this.retorno = retorno;
      window.location.reload();
    });
  }

  alteraQtdeMenos(item: Carrinho) {
    if (item.quantidade === 1) {
      this.retiraItem(item.id, item.ISBN);
    } else {
      item.quantidade--;
      this.carrinhoService.updateCarrinho(item).subscribe(retorno => {
        this.retorno = retorno;
        window.location.reload();
      });
    }
  }

  valorCalculado(preco: number, quantidade: number): number {
    return preco * quantidade;
  }

  subtotalCalculado(): number {
    let subtotal = 0;
    for (let a = 0; a < this.itensCar.length; a++) {
      subtotal = subtotal + (this.itensCar[a].quantidade * this.itensCar[a].valorunidade);
    }
    return subtotal;
  }

  freteCalculado(): number {
    if (this.itensCar.length === 1) {
      return 10;
    } else if (this.itensCar.length > 1) {
      return (10 + ((this.itensCar.length - 1) * 5));
    } else {
      return 0;
    }
  }

  totalCalculado(): number {
    return (this.subtotal + this.frete);
  }

  fecharCompra() {
    if (localStorage.getItem('myCar') === null || this.totalCalculado() === 0) {
      alert('carrinho está vazio');
    } else {
      if (isNull(this.usuarioID)) {
        this.rota.navigate(['fecharcompra/login']);
      } else {
        this.rota.navigate(['cadastro']);
      }
    }

  }
}
