import { Component } from '@angular/core';
import { FoodItemComponent } from './food-item/food-item.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodItemComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {

}
