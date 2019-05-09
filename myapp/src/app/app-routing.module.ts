import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WillisDieHardUneJourneeEnEnferFilmComponent } from './willis-die-hard-une-journee-en-enfer-film/willis-die-hard-une-journee-en-enfer-film.component';
import { ImagesComponent } from './images/images.component';
import { DtcLogoComponent } from './dtc-logo/dtc-logo.component';
import { EriolMC5NantesProgrammeImmobilierComponent } from './eriol-mc5-nantes-programme-immobilier/eriol-mc5-nantes-programme-immobilier.component';

const routes: Routes = [
  { path: 'will', component: WillisDieHardUneJourneeEnEnferFilmComponent },
    { path: 'images', component: ImagesComponent },
	 { path: 'dtc_logo', component: DtcLogoComponent },
  	 { path: 'eriol_mc5_nantes_programme_immobilier', component: EriolMC5NantesProgrammeImmobilierComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
