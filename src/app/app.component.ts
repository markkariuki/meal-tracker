import { Component } from '@angular/core';
import { Task } from './meal.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public masterTaskList: Task[] = [
       new Task("Create To-Do List app.", 0),
       new Task("Learn Kung Fu.", 1),
       new Task("Rewatch all the Lord of the Rings movies.", 2),
       new Task("Do the laundry.", 3)
   ];
   selectedTask: Task = null;
   showDetails(clickedTask: Task) {
     this.selectedTask = clickedTask;
   }
   finishedEditing() {
     this.selectedTask = null;
   }
 }
