import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaIngresoComponent } from './tabla-ingreso.component';

describe('TablaIngresoComponent', () => {
  let component: TablaIngresoComponent;
  let fixture: ComponentFixture<TablaIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
