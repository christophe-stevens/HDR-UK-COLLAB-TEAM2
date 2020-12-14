import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunLibraryComponent } from './run-library.component';

describe('RunLibraryComponent', () => {
  let component: RunLibraryComponent;
  let fixture: ComponentFixture<RunLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
