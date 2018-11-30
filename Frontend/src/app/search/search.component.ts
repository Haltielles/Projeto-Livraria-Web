import { Component, OnInit } from '@angular/core';
import { BookdescriptionService } from '../Services/bookdescription.service';
import { Bookdescription } from '../Services/bookdescription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itensBusca = new Array<Bookdescription>();

  constructor(private buscaDescricao: BookdescriptionService, private rota: Router) {
  }

  ngOnInit() {
  }

  busca( palavraChave: string ) {
    this.rota.navigate(['listabusca/' + palavraChave]);
    this.buscaDescricao.getBookDescription( palavraChave ).subscribe(itens => {
      this.itensBusca = itens;
    });
  }

  descricaoResumida(descricao: String): String {
    return descricao.substr(0, 550);
  }
}
