import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAntiparkinsonComponent } from './add-antiparkinson.component';

describe('AddAntiparkinsonComponent', () => {
  let component: AddAntiparkinsonComponent;
  let fixture: ComponentFixture<AddAntiparkinsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAntiparkinsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAntiparkinsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
