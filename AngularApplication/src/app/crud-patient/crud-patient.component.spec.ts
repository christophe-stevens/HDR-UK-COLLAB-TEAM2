import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPatientComponent } from './crud-patient.component';

describe('CrudPatientComponent', () => {
  let component: CrudPatientComponent;
  let fixture: ComponentFixture<CrudPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
