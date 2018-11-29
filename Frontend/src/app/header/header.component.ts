import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuarioID: string;
  usuarioNome: string;

  constructor() { }

  ngOnInit() {
    this.usuarioID = localStorage.getItem('userID');
    if (!isNull(this.usuarioID)) {
      this.usuarioNome = 'Olá, ' + localStorage.getItem('userName') + ' |';
    }
  }

}
