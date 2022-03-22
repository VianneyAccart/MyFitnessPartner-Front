import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMuscularGroupComponent } from './create-muscular-group.component';

describe('CreateMuscularGroupComponent', () => {
  let component: CreateMuscularGroupComponent;
  let fixture: ComponentFixture<CreateMuscularGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMuscularGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMuscularGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
