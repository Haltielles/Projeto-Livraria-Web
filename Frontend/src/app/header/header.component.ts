import { Component, OnInit, Injectable } from '@angular/core';
import { isNull } from 'util';
import { AppComponent } from '../app.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  usuarioID: string;
  usuarioNome: string;

  constructor(private location: Location) { }

  ngOnInit() {
    this.usuarioID = localStorage.getItem('userID');
    if (!isNull(this.usuarioID)) {
      this.usuarioNome = 'Olá, ' + localStorage.getItem('userName');
    }
  }

  logout() {
    window.localStorage.clear();
    window.location.reload();
  }

}
