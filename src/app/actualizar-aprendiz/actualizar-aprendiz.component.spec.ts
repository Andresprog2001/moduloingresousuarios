import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAprendizComponent } from './actualizar-aprendiz.component';

describe('ActualizarAprendizComponent', () => {
  let component: ActualizarAprendizComponent;
  let fixture: ComponentFixture<ActualizarAprendizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAprendizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
