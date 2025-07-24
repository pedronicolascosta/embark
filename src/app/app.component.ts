import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'embark';

  @ViewChild('hero') hero!: ElementRef;
  @ViewChild('sobre') sobre!: ElementRef;
  @ViewChild('time') time!: ElementRef;
  @ViewChild('problematica') problematica!: ElementRef;
  @ViewChild('metodologia') metodologia!: ElementRef;

  onScrollTo(section: string) {
    const sections: any = {
      hero: this.hero,
      sobre: this.sobre,
      time: this.time,
      problematica : this.problematica,
      metodologia : this.metodologia
    };

    sections[section]?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}