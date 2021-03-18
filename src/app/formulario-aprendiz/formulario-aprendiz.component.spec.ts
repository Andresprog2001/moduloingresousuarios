import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAprendizComponent } from './formulario-aprendiz.component';

describe('FormularioAprendizComponent', () => {
  let component: FormularioAprendizComponent;
  let fixture: ComponentFixture<FormularioAprendizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAprendizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
