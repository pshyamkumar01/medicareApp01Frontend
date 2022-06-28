import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnalgesicsComponent } from './add-analgesics.component';

describe('AddAnalgesicsComponent', () => {
  let component: AddAnalgesicsComponent;
  let fixture: ComponentFixture<AddAnalgesicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnalgesicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnalgesicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
