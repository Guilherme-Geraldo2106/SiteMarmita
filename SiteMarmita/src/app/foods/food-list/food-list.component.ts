import { Component, OnInit } from '@angular/core';
import { FoodItemComponent } from './food-item/food-item.component';
//Models
import { Food } from './food.model';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodItemComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})

export class FoodListComponent implements OnInit {
  foods: Food[] = [new Food("Mini", "marmita tamanho mini", "https://marmitexdesucesso.com/wp-content/uploads/2019/10/qual-a-quantidade-de-comida-para-marmitex-1200x675.jpg"),
  new Food("Media", "marmita tamanho medio", "https://www.takenteembalagens.com.br/imagens/informacoes/embalagem-mini-marmita-aluminio-04.jpg")];

  constructor() {

  }

  ngOnInit(): void {

  }
}
