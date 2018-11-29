import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../Services/carrinho';
import { CarrinhoService } from '../Services/carrinho.service';
import { Router } from '@angular/router';
import { isNull } from 'util';

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

  constructor(private carrinhoService: CarrinhoService, private rota: Router ) {
  }

  ngOnInit() {
    this.usuarioID = localStorage.getItem('userID');
    this.usuarioNome = localStorage.getItem('userName');
    // observar este ponto
    this.carrinhoService.getCarrinhoId(1).subscribe(itens => {
      this.itensCar = itens;
      this.subtotal = this.subtotalCalculado();
      this.frete = this.freteCalculado();
      this.total = this.totalCalculado();
    });
  }
  retiraItem(ISBN: number) {
    this.itensCar.splice(3, 1);
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
      return ( 10 + ( (this.itensCar.length - 1) * 5 ) );
    } else {
      return 0;
    }
  }

  totalCalculado(): number {
    return (this.subtotal + this.frete);
  }

  fecharCompra() {
    if (isNull(this.usuarioID)) {
      this.rota.navigate(['login']);
    } else {
      this.rota.navigate(['cadastro']);
    }
  }
}
