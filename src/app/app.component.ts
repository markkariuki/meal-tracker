import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meal-tracker';
  public tasks: Task[] = [
        new Task("Create To-Do List app.", 0),
        new Task("Learn Kung Fu.", 1),
        new Task("Rewatch all the Lord of the Rings movies.", 2),
        new Task("Do the laundry.", 3)
    ];
    selectedTask: Task = this.tasks[0];
   showDetails(clickedTask: Task) {
     this.selectedTask = clickedTask;
   }
   finishedEditing() {
     this.selectedTask = null;
   }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
