import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtarjetasComponent } from './gtarjetas.component';

describe('GtarjetasComponent', () => {
  let component: GtarjetasComponent;
  let fixture: ComponentFixture<GtarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtarjetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GtarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
