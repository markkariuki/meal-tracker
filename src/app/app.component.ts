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
    new Meal("lunch", 400, "chips")
  ];

   selectedMeal: Meal = null;
   showDetails(clickedMeal: Meal) {
     this.selectedMeal = clickedMeal;
   }
   deleteDetails(deleteMeal: Meal){
     var index:number= this.masterMealList.indexOf(deleteMeal);
     this.masterMealList.splice(index,1);
   }
   finishedEditing() {
     this.selectedMeal = null;
   }

   addMeal(newMealFromChild: Meal) {
   this.masterMealList.push(newMealFromChild);
 }
 }
