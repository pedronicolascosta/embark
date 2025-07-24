import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { SobreComponent } from './sobre/sobre.component';
import { TimeComponent } from './time/time.component';
import { FooterComponent } from './footer/footer.component';
import { ProblematicaComponent } from './problematica/problematica.component';
import { TimelineComponent } from './timeline/timeline.component';
import { DemonstracaoComponent } from './demonstracao/demonstracao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    SobreComponent,
    TimeComponent,
    FooterComponent,
    ProblematicaComponent,
    TimelineComponent,
    DemonstracaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
