import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from './../shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Visit Japan', false),
    new WishItem('Go to the gym', false),
    new WishItem('Go eat infinite sushi', true)
  ];

  constructor(events: EventService) {
    events.listen('removeWish', (wish: any) => {
      // todo remove wish from items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  filter: any;
}