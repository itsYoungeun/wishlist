import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    // new WishItem('Visit Japan', false),
    // new WishItem('Go to the gym', false),
    // new WishItem('Go eat infinite sushi', true)
  ];

  newWishText = '';

  title = 'wishlist';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  };

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  };
}
