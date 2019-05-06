import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WillisDieHardUneJourneeEnEnferFilmComponent } from './willis-die-hard-une-journee-en-enfer-film/willis-die-hard-une-journee-en-enfer-film.component';
import { ImagesComponent } from './images/images.component';
import { DtcLogoComponent } from './dtc-logo/dtc-logo.component';

const routes: Routes = [
  { path: 'will', component: WillisDieHardUneJourneeEnEnferFilmComponent },
    { path: 'images', component: ImagesComponent },
	 { path: 'dtc_logo', component: DtcLogoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
