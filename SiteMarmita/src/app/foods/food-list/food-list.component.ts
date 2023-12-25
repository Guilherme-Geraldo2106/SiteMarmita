import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItemComponent } from './food-item/food-item.component';
//Models
import { Food } from '../food.model';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodItemComponent, CommonModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})

export class FoodListComponent implements OnInit {
  foods: Food[] = [new Food("Parmegiana de alcatra", "marmita de parmegiana de alcatra, acompanha fritas", "https://srantonini.com.br/wp-content/uploads/2022/12/24-1.png"),
  new Food("Parmegiana de frango", "marmita de parmegiana de frango, acompanha fritas", "https://srantonini.com.br/wp-content/uploads/2022/12/42-1.png")];

  constructor() {

  }

  ngOnInit(): void {

  }
}
