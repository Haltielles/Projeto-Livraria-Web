import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../Services/especialquery';
import { EspecialqueryService } from '../Services/especialquery.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itensBusca = new Array<Livro>();

  constructor(private buscaTitulo: EspecialqueryService, private rota: Router) {
  }

  ngOnInit() {
  }

  busca(titulo: string) {
    console.log(titulo);
    this.rota.navigate(['listabusca/title/' + titulo]);
    window.location.reload();
  }

  descricaoResumida(descricao: String): String {
    return descricao.substr(0, 550);
  }
}
