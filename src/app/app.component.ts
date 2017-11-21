import { Component } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title= 'meal tracker';
  public masterMealList: Meal[] = [
    new Meal("chips", 400, "lunch")
  ];

   selectedMeal: Meal = null;
   showDetails(clickedMeal: Meal) {
     this.selectedMeal = clickedMeal;
   }
   finishedEditing() {
     this.selectedMeal = null;
   }
   addMeal(newMealFromChild: Meal) {
   this.masterMealList.push(newMealFromChild);
 }
 }
