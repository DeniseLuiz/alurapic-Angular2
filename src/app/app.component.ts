import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://www.fundosanimais.com/Imagens/yorkshire-terrier.jpg',
      description: 'Yorkshire',
    },
    {
      url: 'https://www.fundosanimais.com/Imagens/chihuahua.jpg',
      description: 'Chiuahua'
    }
  ]
}
