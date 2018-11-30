import { Component, OnInit } from '@angular/core';
import { EspecialqueryService } from '../Services/especialquery.service';
import { Livro } from '../Services/especialquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listabusca',
  templateUrl: './listabusca.component.html',
  styleUrls: ['./listabusca.component.css']
})

export class ListabuscaComponent implements OnInit {
  itensBusca = new Array<Livro>();
  busca: string;
  tipo: string;

  constructor(private especialQuery: EspecialqueryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tipo = this.route.snapshot.paramMap.get('tipo');
    this.busca = this.route.snapshot.paramMap.get('id');
    console.log(this.tipo);
    console.log(this.busca);

    if (this.tipo === 'title') {
      this.especialQuery.bookTitle(this.busca).subscribe(itens => {
        this.itensBusca = itens;
      });
    } else if (this.tipo === 'categoria') {
      if (this.busca === 'all') {
        this.especialQuery.allBooks().subscribe(itens => {
          this.itensBusca = itens;
        });
      } else {
        this.especialQuery.bookCategoria(this.busca).subscribe(itens => {
          this.itensBusca = itens;
        });
      }
    } else if (this.tipo === 'authors') {
      this.especialQuery.bookAuthor(this.busca).subscribe(itens => {
        this.itensBusca = itens;
      });
    }
  }

  descricaoResumida(descricao: String): String {
    return descricao.substr(0, 550);
  }
}

