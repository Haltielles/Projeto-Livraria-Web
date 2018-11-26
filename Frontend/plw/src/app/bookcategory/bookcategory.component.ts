import { Component, OnInit } from '@angular/core';
import { BookcategoryService } from '../Services/bookcategory.service';//service
import { BookCategory } from '../Services/bookcategory';//interface 


@Component({
  selector: 'app-bookcategory',
  templateUrl: './bookcategory.component.html',
  styleUrls: ['./bookcategory.component.css']
})
export class BookcategoryComponent implements OnInit {
  categoria: BookCategory[];
  constructor(private bookcategoryService: BookcategoryService) { }

  ngOnInit() {
    this.buscarCategoria();
  }
  buscarCategoria() {
    this.bookcategoryService.getUsuarioLogin("1").subscribe(categoria => {
      this.categoria = categoria
      console.log(this.categoria[0].CategoryID);
      console.log(this.categoria[0].CategoryName);
    });
  }

}
