import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiparkinsonComponent } from './antiparkinson.component';

describe('AntiparkinsonComponent', () => {
  let component: AntiparkinsonComponent;
  let fixture: ComponentFixture<AntiparkinsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiparkinsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiparkinsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
