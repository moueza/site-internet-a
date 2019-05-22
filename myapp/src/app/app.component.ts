import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  
  
  constructor(private meta: Meta) { 
     this.meta.addTag({ name: 'description', content: 'Site principal de Peter MOUEZA' });
    this.meta.addTag({ name: 'author', content: 'Peter MOUEZA' });
    this.meta.addTag({ name: 'keywords', content: 'peter, moueza, Nantes' });
}
}
