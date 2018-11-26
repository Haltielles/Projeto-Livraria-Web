import { Component, OnInit } from '@angular/core';
import { BookcategoryService } from '../Services/bookcategory.service';//service
import { BookCategory } from '../Services/bookcategory';//interface 
import { Retorno } from '../Services/Retorno';


@Component({
  selector: 'app-bookcategory',
  templateUrl: './bookcategory.component.html',
  styleUrls: ['./bookcategory.component.css']
})
export class BookcategoryComponent implements OnInit {
  retorno: Retorno;
  categoria: BookCategory[];
  novacategoria: BookCategory;
  constructor(private bookcategoryService: BookcategoryService) { }

  ngOnInit() {
    //this.getCategoria();
    //this.inserirCategoria();
    //this.atualizarCategoria();
    this.deletaCategoria();
  }
  getCategoria() {
    this.bookcategoryService.getBookCategory("1").subscribe(categoria => {
      this.categoria = categoria
      console.log(this.categoria[0].CategoryID);
      console.log(this.categoria[0].CategoryName);
    });
  }

  inserirCategoria() {
    this.novacategoria = new BookCategory;
    this.novacategoria.CategoryName = 'bloodfollen';
    this.bookcategoryService.insertBookCategory(this.novacategoria).subscribe(retorno => this.retorno = retorno);
  }

  atualizarCategoria() {
    this.bookcategoryService.getBookCategory('9').subscribe(categoria => {
      this.categoria = categoria;
      this.categoria[0].CategoryName = 'doolb';
      this.bookcategoryService.updateBookCategory(this.categoria[0]).subscribe(retorno => this.retorno = retorno);
    })
  }
  deletaCategoria(){
    this.bookcategoryService.deleteBookCategory('9').subscribe(retorno => this.retorno = retorno);
  }

}
