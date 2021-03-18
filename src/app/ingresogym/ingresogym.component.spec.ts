import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresogymComponent } from './ingresogym.component';

describe('IngresogymComponent', () => {
  let component: IngresogymComponent;
  let fixture: ComponentFixture<IngresogymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresogymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresogymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
