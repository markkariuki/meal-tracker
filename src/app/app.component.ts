import { Component } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public masterMealList: Meal[] = [

   ];
   selectedMeal: Meal = null;
   showDetails(clickedMeal: Meal) {
     this.selectedMeal = clickedMeal;
   }
   finishedEditing() {
     this.selectedMeal = null;
   }
 }
