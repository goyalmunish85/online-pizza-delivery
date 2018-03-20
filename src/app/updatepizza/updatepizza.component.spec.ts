import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepizzaComponent } from './updatepizza.component';

describe('UpdatepizzaComponent', () => {
  let component: UpdatepizzaComponent;
  let fixture: ComponentFixture<UpdatepizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
