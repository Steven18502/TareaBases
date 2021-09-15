import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GprestamosComponent } from './gprestamos.component';

describe('GprestamosComponent', () => {
  let component: GprestamosComponent;
  let fixture: ComponentFixture<GprestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GprestamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GprestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
