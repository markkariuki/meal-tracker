import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal-list/meal';
@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  meal: Meal = {
      id: 1,
      name: 'Windstorm'
    };
  constructor() { }

  ngOnInit() {
  }



}
