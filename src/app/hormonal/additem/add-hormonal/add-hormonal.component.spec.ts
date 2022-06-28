import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHormonalComponent } from './add-hormonal.component';

describe('AddHormonalComponent', () => {
  let component: AddHormonalComponent;
  let fixture: ComponentFixture<AddHormonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHormonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHormonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
