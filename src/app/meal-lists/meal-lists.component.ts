import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../meal.model';

@Component({
  selector: 'app-meal-lists',
  templateUrl: './meal-lists.component.html',
  styleUrls: ['./meal-lists.component.css']
})
export class MealListsComponent implements OnInit {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  constructor(){}

  ngOnInit(){}

}
