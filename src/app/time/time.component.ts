import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  ngOnInit(): void { }

  modalAberto = false;

  integranteSelecionado: any = {};

  integrantes: { [key: string]: {
      nome: string;
      idade: number;
      curso: string;
      area: string;
      foto: string;
      linkedin: string;
    }
  } = {
        pedro: {
          nome: 'Pedro Nicolas Costa',
          idade: 19,
          curso: 'Ciência da Computação',
          area: 'TI Financeira',
          foto: 'assets/time/pedro.png',
          linkedin: 'https://linkedin.com/in/pedronicolascosta'
        },
      };

  abrirModal(id: string) {
    this.integranteSelecionado = this.integrantes[id];
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }
}