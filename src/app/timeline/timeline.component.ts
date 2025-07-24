import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements AfterViewInit {
  @ViewChild('timelineWrapper') timelineWrapper!: ElementRef;

  eventos = [
    { texto: 'Evento 1', data: '01/01/2025' },
    { texto: 'Evento 2', data: '02/01/2025' },
    { texto: 'Evento 3', data: '03/01/2025' },
    { texto: 'Evento 4', data: '04/01/2025' },
    { texto: 'Evento 5', data: '05/01/2025' },
    { texto: 'Evento 6', data: '06/01/2025' },
    { texto: 'Evento 7', data: '07/01/2025' },
    { texto: 'Evento 8', data: '08/01/2025' }
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