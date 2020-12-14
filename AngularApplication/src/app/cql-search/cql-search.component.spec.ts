import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqlSearchComponent } from './cql-search.component';

describe('CqlSearchComponent', () => {
  let component: CqlSearchComponent;
  let fixture: ComponentFixture<CqlSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqlSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CqlSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
