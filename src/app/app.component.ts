import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public meal: Meal[] = [
        new Meal("Create To-Do List app.", 0),
        new Meal("Learn Kung Fu.", 1),
        new Meal("Rewatch all the Lord of the Rings movies.", 2),
        new Meal("Do the laundry.", 3)
    ];

  selectedMeal: Meal = this.meal[0];
   showDetails(clickedMeal: Meal) {
     this.selectedMeal = clickedMeal;
   }
   finishedEditing() {
     this.selectedMeal = null;
   }
 }


export class Meal {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
