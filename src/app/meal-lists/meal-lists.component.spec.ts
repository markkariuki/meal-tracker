import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListsComponent } from './meal-lists.component';

describe('MealListsComponent', () => {
  let component: MealListsComponent;
  let fixture: ComponentFixture<MealListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
