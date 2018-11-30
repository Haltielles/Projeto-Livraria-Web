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

  itensAll = new Array<Livro>();

  constructor(private especialQuery: EspecialqueryService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.especialQuery.bookCategoria( this.route.snapshot.paramMap.get('id')).subscribe(itens => {
      this.itensAll = itens;
    });
  }

  descricaoResumida(descricao: String): String {
    return descricao.substr(0, 550);
  }
}

