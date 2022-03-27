import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSessionComponent } from './end-session.component';

describe('EndSessionComponent', () => {
  let component: EndSessionComponent;
  let fixture: ComponentFixture<EndSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
