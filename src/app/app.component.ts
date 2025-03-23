import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import events from './../shared/services/EventService';

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

  constructor() {
    events.listen('removeWish', (wish: any) => {
      // todo remove wish from items
      console.log(wish)
    })
  }

  filter: any;
}