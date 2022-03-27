import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExerciseInSessionComponent } from './add-exercise-in-session.component';

describe('AddExerciseInSessionComponent', () => {
  let component: AddExerciseInSessionComponent;
  let fixture: ComponentFixture<AddExerciseInSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExerciseInSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExerciseInSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
