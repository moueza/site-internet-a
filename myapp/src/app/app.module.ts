import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WillisQuartiersMalfamesPancarteArabesBlacksComponent } from './willis-quartiers-malfames-pancarte-arabes-blacks/willis-quartiers-malfames-pancarte-arabes-blacks.component';
import { WillisDieHardUneJourneeEnEnferFilmComponent } from './willis-die-hard-une-journee-en-enfer-film/willis-die-hard-une-journee-en-enfer-film.component';
import { BronzesAmisPourLaVieRadinJugnotFilmComponent } from './bronzes-amis-pour-la-vie-radin-jugnot-film/bronzes-amis-pour-la-vie-radin-jugnot-film.component';
import { NOCOUNTRYFOROLDMENPistonFilmComponent } from './no-country-for-old-men-piston-film/no-country-for-old-men-piston-film.component';
import { MetaKeywordsComponent } from './meta-keywords/meta-keywords.component';
import { LaPetiteGeanteChuRoyalDeLuxeNantesGeantsPeintureComponent } from './la-petite-geante-chu-royal-de-luxe-nantes-geants-peinture/la-petite-geante-chu-royal-de-luxe-nantes-geants-peinture.component';

@NgModule({
  declarations: [
    AppComponent,
    WillisQuartiersMalfamesPancarteArabesBlacksComponent,
    WillisDieHardUneJourneeEnEnferFilmComponent,
    BronzesAmisPourLaVieRadinJugnotFilmComponent,
    NOCOUNTRYFOROLDMENPistonFilmComponent,
    MetaKeywordsComponent,
  
    LaPetiteGeanteChuRoyalDeLuxeNantesGeantsPeintureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
