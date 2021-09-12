import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcuentasComponent } from './gcuentas.component';

describe('GcuentasComponent', () => {
  let component: GcuentasComponent;
  let fixture: ComponentFixture<GcuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
