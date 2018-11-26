import { Component, OnInit } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  titulo = 'Assunto';
  itens = [
    new MenuItem(1, 'Php', 'php'),
    new MenuItem(2, 'Javascript', 'javascript'),
    new MenuItem(3, 'Typescript', 'typescript'),
    new MenuItem(4, 'SQL', 'sql'),
    new MenuItem(5, 'JSON', 'json'),
    new MenuItem(6, 'Ajax', 'ajax'),
    new MenuItem(7, 'ASP.Net', 'aspnet'),
    new MenuItem(8, 'Angular', 'angular'),
    new MenuItem(9, 'Node.JS', 'nodejs')
  ];
  default = this.itens[0];
}
