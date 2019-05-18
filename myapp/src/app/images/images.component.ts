import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private meta: Meta) { 
     this.meta.addTag({ name: 'description', content: 'Image de vaisseau sanguin' });
    this.meta.addTag({ name: 'author', content: 'Peter MOUEZA' });
    this.meta.addTag({ name: 'keywords', content: 'peter, moueza, Nantes,sang, blood,biology,medicine,red,cells,art' });
}

  ngOnInit() {
  }

}
