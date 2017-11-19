import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { EditMealsComponent } from './edit-meals/edit-meals.component';
import { NewMealsComponent } from './new-meals/new-meals.component';
import { MealListsComponent } from './meal-lists/meal-lists.component';


@NgModule({
  declarations: [
    AppComponent,
    EditMealsComponent,
    NewMealsComponent,
    MealListsComponent,
  ],

  imports: [
  BrowserModule,
  FormsModule,
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
