/*
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
*/


import { Component, OnInit } from '@angular/core';
import { BookcategoryService } from '../Services/bookcategory.service';
import { BookCategory } from '../Services/bookcategory';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  itens = new Array<BookCategory>();

  constructor(private bookCategory: BookcategoryService) {
  }

  ngOnInit() {
    //this.bookCategory.getBookCategory().subscribe(itens => {
    //  this.itens = itens;
    //});
  }
}