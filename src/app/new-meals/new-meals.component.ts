import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Meal } from '../meal.model';
@Component({
  selector: 'app-new-meals',
  templateUrl: './new-meals.component.html',
  styleUrls: ['./new-meals.component.css']
})
export class NewMealsComponent implements OnInit {
  addClicked(description: string, id: number) {
      var newMealToAdd: Meal = new Meal(description, id);
    }
  constructor() { }

  ngOnInit() {
  }

}
