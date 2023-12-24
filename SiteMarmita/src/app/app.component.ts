import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FoodsComponent } from './foods/foods.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            FoodsComponent,
            IngredientListComponent,
            HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
