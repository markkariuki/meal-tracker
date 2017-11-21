import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../meal.model';

@Component({
  selector: 'app-meal-lists',
  templateUrl: './meal-lists.component.html',
  styleUrls: ['./meal-lists.component.css']
})
export class MealListsComponent implements OnInit {
    @Input() childTaskList: Task[];
  }
