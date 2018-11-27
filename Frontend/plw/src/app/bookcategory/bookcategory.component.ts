import { Component, OnInit } from '@angular/core';
import { BookcategoryService } from '../Services/bookcategory.service';//service
import { BookCategory } from '../Services/bookcategory';//interface 
import { Retorno } from '../Services/Retorno';
import { UsuarioService } from '../Services/usuario.service'
import { Usuario } from '../Services/usuario'
import { EmailsenderService } from '../Services/emailsender.service';

@Component({
  selector: 'app-bookcategory',
  templateUrl: './bookcategory.component.html',
  styleUrls: ['./bookcategory.component.css']
})
export class BookcategoryComponent implements OnInit {
  usuario = new Usuario;
  retorno: Retorno;
  categoria: BookCategory[];
  novacategoria: BookCategory;
  constructor(private emailsenderservice: EmailsenderService) { }

  ngOnInit() {
    //this.getCategoria();
    //this.inserirCategoria();
    //this.atualizarCategoria();
    //this.deletaCategoria();
    this.emailsenderservice.sendEmail('haltiellestil@gmail.com','haltielles',25,250.5).subscribe(retorno => this.retorno = retorno);
  }/*
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
  deletaCategoria() {
    this.bookcategoryService.deleteBookCategory('9').subscribe(retorno => this.retorno = retorno);
  }
*/
}
