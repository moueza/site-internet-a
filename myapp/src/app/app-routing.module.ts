import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WillisDieHardUneJourneeEnEnferFilmComponent } from './willis-die-hard-une-journee-en-enfer-film/willis-die-hard-une-journee-en-enfer-film.component';
const routes: Routes = [
  { path: 'will', component: WillisDieHardUneJourneeEnEnferFilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
