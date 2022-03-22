import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscularGroupsComponent } from './muscular-groups.component';

describe('MuscularGroupsComponent', () => {
  let component: MuscularGroupsComponent;
  let fixture: ComponentFixture<MuscularGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscularGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscularGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
