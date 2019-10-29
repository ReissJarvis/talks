import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html'
})
export class BeerCardComponent {
  @Input() beer: Beer;
}
