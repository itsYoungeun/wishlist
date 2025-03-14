import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    new WishItem('Visit Japan', true),
    new WishItem('Go to the gym', false),
    new WishItem('Go eat infinite sushi', false)
  ];
  title = 'wishlist';
}
