import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPersonajesComponent } from './local-personajes.component';

describe('LocalPersonajesComponent', () => {
  let component: LocalPersonajesComponent;
  let fixture: ComponentFixture<LocalPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalPersonajesComponent]
    });
    fixture = TestBed.createComponent(LocalPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


