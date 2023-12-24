import { Component, OnInit } from '@angular/core';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodListComponent } from './food-list/food-list.component';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [FoodListComponent,
            FoodDetailsComponent],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent implements OnInit {

  foods = [];

  constructor(){

  }

  ngOnInit() : void{

  }

}
