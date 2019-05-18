import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-eriol-mc5-nantes-programme-immobilier',
  templateUrl: './eriol-mc5-nantes-programme-immobilier.component.html',
  styleUrls: ['./eriol-mc5-nantes-programme-immobilier.component.sass']
})
export class EriolMC5NantesProgrammeImmobilierComponent implements OnInit {

  constructor(private meta: Meta) { 
     this.meta.addTag({ name: 'description', content: 'Nantes Malakoff Renouveau' });
    this.meta.addTag({ name: 'author', content: 'Peter MOUEZA' });
    this.meta.addTag({ name: 'keywords', content: 'peter, moueza, Nantes,Malakoff, immobilier,Eriol,MC5,programme,immeuble,architecture' });
	
	  this.meta.addTag({ name: 'keywords', content:'peter, moueza, Nantes,Malakoff, immobilier,Eriol,MC5,programme,immeuble,architecture' },true);
	  }

  ngOnInit() {
  }

}
