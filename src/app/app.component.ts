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

  onScrollTo(section: string) {
    const sections: any = {
      hero: this.hero,
      sobre: this.sobre,
      time: this.time
    };

    sections[section]?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}