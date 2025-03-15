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
    new WishItem('Visit Japan', false),
    new WishItem('Go to the gym', false),
    new WishItem('Go eat infinite sushi', true)
  ];

  listFilter : String = '0';

  newWishText = '';

  title = 'wishlist';

  visibleItems : WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  };

  filterChanged(value : any) {
    if (value === '0') {
      this.visibleItems = this.items;
    } else if (value === '1') {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  };

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  };
}
