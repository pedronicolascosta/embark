import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() scrollTo = new EventEmitter<string>();

  navegarPara(secao: string) {
    this.scrollTo.emit(secao);
  }

  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}