import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzadetailComponent } from './pizzadetail.component';

describe('PizzadetailComponent', () => {
  let component: PizzadetailComponent;
  let fixture: ComponentFixture<PizzadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
