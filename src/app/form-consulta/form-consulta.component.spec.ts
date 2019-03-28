import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsultaComponent } from './form-consulta.component';

describe('FormConsultaComponent', () => {
  let component: FormConsultaComponent;
  let fixture: ComponentFixture<FormConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
