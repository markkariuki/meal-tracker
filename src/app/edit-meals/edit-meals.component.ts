import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../meal.model';
@Component({
  selector: 'app-edit-meals',
  templateUrl: './edit-meals.component.html',
  styleUrls: ['./edit-meals.component.css']
})
export class EditMealsComponent implements OnInit {
 @Input() childSelectedTask: Task;
 @Output() doneClickedSender = new EventEmitter();
 doneClicked() {
   this.doneClickedSender.emit();
 }
  constructor() { }

  ngOnInit() {
  }

}
