import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meal-tracker';
  public task: Task = new Task("Create To-Do List app.", 0);

}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
