import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Meal } from '../meal.model';
@Component({
  selector: 'app-edit-meals',
  templateUrl: './edit-meals.component.html',
  styleUrls: ['./edit-meals.component.css']
})
export class EditMealsComponent  {
 @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();

 doneClicked() {
  this.doneClickedSender.emit();
  }
 }
