import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryRouteComponent } from './literary-route.component';

describe('LiteraryRouteComponent', () => {
  let component: LiteraryRouteComponent;
  let fixture: ComponentFixture<LiteraryRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteraryRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
