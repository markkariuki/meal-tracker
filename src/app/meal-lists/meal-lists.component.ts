import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-meal-lists',
  templateUrl: './meal-lists.component.html',
  styleUrls: ['./meal-lists.component.css']
})
export class MealListsComponent implements OnInit {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  constructor(){}

  ngOnInit(){}

}
