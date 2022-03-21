import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyExerciseComponent } from './modify-exercise.component';

describe('ModifyExerciseComponent', () => {
  let component: ModifyExerciseComponent;
  let fixture: ComponentFixture<ModifyExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
