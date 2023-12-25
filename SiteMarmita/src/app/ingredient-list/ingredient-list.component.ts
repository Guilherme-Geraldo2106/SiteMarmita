import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//Component
import { IngredientListEditComponent } from './ingredient-list-edit/ingredient-list-edit.component';
//Models
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [IngredientListEditComponent, CommonModule],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Alcatra", 10),
    new Ingredient("Frango", 10),
    new Ingredient("Batata", 20)
  ]

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
