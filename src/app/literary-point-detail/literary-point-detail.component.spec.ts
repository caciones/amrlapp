import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryPointDetailComponent } from './literary-point-detail.component';

describe('LiteraryPointDetailComponent', () => {
  let component: LiteraryPointDetailComponent;
  let fixture: ComponentFixture<LiteraryPointDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteraryPointDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryPointDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
