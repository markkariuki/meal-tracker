import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Meal } from '../meal.model';
@Component({
  selector: 'app-new-meals',
  templateUrl: './new-meals.component.html',
  styleUrls: ['./new-meals.component.css']
})
export class NewMealsComponent implements OnInit {
  @Output() newMealSender = new EventEmitter();
 addClicked(description: string, calories: number, type:string) {
      var newMealToAdd: Meal = new Meal(description, calories, type);
      this.newMealSender.emit(newMealToAdd);

    }
  constructor() { }

  ngOnInit() {
  }

}
