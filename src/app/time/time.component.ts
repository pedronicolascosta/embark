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
          nome: 'Bruna Rachel Souza de Jesus',
          idade: 23,
          curso: 'Direito',
          area: 'Jurídico Mercado de Capitais',
          foto: 'assets/time/bruna.png',
          linkedin: 'https://www.linkedin.com/in/brunarachel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        daniel: {
          nome: 'Daniel Moreira dos Santos',
          idade: 20,
          curso: 'Ciências Atuarias',
          area: 'APC Produção - Cash/Tarifas',
          foto: 'assets/time/daniel.png',
          linkedin: 'https://www.linkedin.com/in/daniel-moreira-dos-santos-29652525b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        fabiam: {
          nome: 'Fabiam Damaceno',
          idade: 24,
          curso: 'Análise e Desenvolvimento de Sistemas',
          area: 'TI SafraPay',
          foto: 'assets/time/fabiam.png',
          linkedin: 'https://www.linkedin.com/in/fabiamdamaceno?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        gilberto: {
          nome: 'Gilberto Lafi',
          idade: 21,
          curso: 'Engenharia de Produção',
          area: 'Negócios SafraPay',
          foto: 'assets/time/gilberto.png',
          linkedin: 'https://www.linkedin.com/in/gilbertolafi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        giovanna: {
          nome: 'Giovanna Calmon Silva',
          idade: 22,
          curso: 'Direito',
          area: 'Financeira Passivas',
          foto: 'assets/time/giovanna.png',
          linkedin: 'https://www.linkedin.com/in/giovanna-calmon-26a308190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        guilherme: {
          nome: 'Guilherme Lima',
          idade: 0,
          curso: '',
          area: '',
          foto: 'assets/time/guilherme.png',
          linkedin: ''
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
          nome: 'Priscila Raquel Herculano Correia',
          idade: 21,
          curso: 'Sistemas de Informação',
          area: 'CRM Mensuração Aquisição',
          foto: 'assets/time/priscila.png',
          linkedin: 'https://www.linkedin.com/in/priscilaherculano'
        },
        tomas: {
          nome: 'Tomas Silva',
          idade: 0,
          curso: '',
          area: 'Produtos SafraPay',
          foto: 'assets/time/tomas.png',
          linkedin: 'https://www.linkedin.com/in/tom%C3%A1s-silva-santos-229041289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
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