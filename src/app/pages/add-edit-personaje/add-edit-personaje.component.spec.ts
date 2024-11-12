import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPersonajeComponent } from './add-edit-personaje.component';

describe('AddEditPersonajeComponent', () => {
  let component: AddEditPersonajeComponent;
  let fixture: ComponentFixture<AddEditPersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPersonajeComponent]
    });
    fixture = TestBed.createComponent(AddEditPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
