import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMuscularGroupComponent } from './modify-muscular-group.component';

describe('ModifyMuscularGroupComponent', () => {
  let component: ModifyMuscularGroupComponent;
  let fixture: ComponentFixture<ModifyMuscularGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyMuscularGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMuscularGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
