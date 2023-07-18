import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryRouteDetailComponent } from './literary-route-detail.component';

describe('LiteraryRouteDetailComponent', () => {
  let component: LiteraryRouteDetailComponent;
  let fixture: ComponentFixture<LiteraryRouteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteraryRouteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryRouteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
