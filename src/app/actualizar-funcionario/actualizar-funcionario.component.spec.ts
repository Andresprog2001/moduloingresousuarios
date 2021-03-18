import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFuncionarioComponent } from './actualizar-funcionario.component';

describe('ActualizarFuncionarioComponent', () => {
  let component: ActualizarFuncionarioComponent;
  let fixture: ComponentFixture<ActualizarFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
