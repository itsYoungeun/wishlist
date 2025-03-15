import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete,
];

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

  listFilter : any = '0';

  newWishText = '';

  title = 'wishlist';

  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  };

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  };
}
