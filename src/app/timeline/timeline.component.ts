import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements AfterViewInit {
  @ViewChild('timelineWrapper') timelineWrapper!: ElementRef;

  eventos = [
  { texto: 'Formação da equipe e definição do problema com a área jurídica ', data: 'Maio 2025', futuro: false },
  { texto: 'Levantamento de requisitos e coleta de dados', data: 'Junho 2025', futuro: false },
  { texto: 'Desenvolvimento do protótipo da dashboard', data: 'Julho 2025', futuro: false },
  { texto: '1º Pitch de apresentação para os sponsors', data: 'Julho 2025', futuro: false },
  { texto: 'Criação de scripts em Python para leitura automatizada de notas fiscais', data: 'Agosto 2025', futuro: true },
  { texto: 'Validação técnica e testes da dashboard final ', data: 'Setembro 2025', futuro: true }
  ];


  ngAfterViewInit() {
    const el = this.timelineWrapper.nativeElement as HTMLElement;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    el.addEventListener('mousedown', (e) => {
      isDown = true;
      el.classList.add('active');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });

    el.addEventListener('mouseleave', () => {
      isDown = false;
      el.classList.remove('active');
    });

    el.addEventListener('mouseup', () => {
      isDown = false;
      el.classList.remove('active');
    });

    el.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    });

    // Suporte para touch (opcional)
    let touchStartX = 0;
    let touchScrollLeft = 0;

    el.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].pageX - el.offsetLeft;
      touchScrollLeft = el.scrollLeft;
    });

    el.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - touchStartX) * 1.5;
      el.scrollLeft = touchScrollLeft - walk;
    });
  }

  scrollTimeline(direction: 'left' | 'right') {
    const el = this.timelineWrapper.nativeElement as HTMLElement;
    const scrollAmount = 300; // pixels por clique

    if (direction === 'left') {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}