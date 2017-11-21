import { Component } from '@angular/core';
import { Task } from './meal.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public masterTaskList: Task[] = [
      
   ];
   selectedTask: Task = null;
   showDetails(clickedTask: Task) {
     this.selectedTask = clickedTask;
   }
   finishedEditing() {
     this.selectedTask = null;
   }
 }
