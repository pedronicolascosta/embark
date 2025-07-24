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
        bruna: {
          nome: 'Bruna Rachel',
          idade: 0,
          curso: 'Direito',
          area: '',
          foto: 'assets/time/bruna.png',
          linkedin: 'https://linkedin.com/in/pedronicolascosta'
        },
        daniel: {
          nome: 'Daniel Moreira',
          idade: 0,
          curso: '',
          area: '',
          foto: 'assets/time/daniel.png',
          linkedin: 'https://linkedin.com/in/pedronicolascosta'
        },
        fabiam: {
          nome: 'Fabiam Damaceno',
          idade: 0,
          curso: 'Sistemas de Informação',
          area: 'TI Safra Pay',
          foto: 'assets/time/fabiam.png',
          linkedin: 'https://linkedin.com/in/pedronicolascosta'
        },
        gilberto: {
          nome: 'Gilberto Lafi',
          idade: 0,
          curso: 'Direito',
          area: '',
          foto: 'assets/time/gilberto.png',
          linkedin: 'https://linkedin.com/in/pedronicolascosta'
        },
        giovanna: {
          nome: 'Giovanna Calmon Silva',
          idade: 22,
          curso: 'Direito',
          area: 'Financeira Passivas',
          foto: 'assets/time/giovanna.png',
          linkedin: 'https://linkedin.com/in/pedronicolascosta'
        },
        guilherme: {
          nome: 'Guilherme Lima',
          idade: 19,
          curso: 'Ciência da Computação',
          area: 'TI Financeira',
          foto: 'assets/time/pedro.png',
          linkedin: 'https://linkedin.com/in/pedronicolascosta'
        },
        pedro: {
          nome: 'Pedro Nicolas Costa',
          idade: 19,
          curso: 'Ciência da Computação',
          area: 'TI Financeira',
          foto: 'assets/time/pedro.png',
          linkedin: 'https://linkedin.com/in/pedronicolascosta'
        },
        priscila: {
          nome: 'Priscila Herculano',
          idade: 0,
          curso: '',
          area: '',
          foto: 'assets/time/priscila.png',
          linkedin: 'https://linkedin.com/in/pedronicolascosta'
        },
        tomas: {
          nome: 'Tomas Silva',
          idade: 0,
          curso: '',
          area: '',
          foto: 'assets/time/tomas.png',
          linkedin: 'https://linkedin.com/in/pedronicolascosta'
        }
      };

  abrirModal(id: string) {
    this.integranteSelecionado = this.integrantes[id];
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }
}