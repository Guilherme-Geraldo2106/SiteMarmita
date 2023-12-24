import { Component } from '@angular/core';
import { IngredientListEditComponent } from './ingredient-list-edit/ingredient-list-edit.component';

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [IngredientListEditComponent],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent {

}
