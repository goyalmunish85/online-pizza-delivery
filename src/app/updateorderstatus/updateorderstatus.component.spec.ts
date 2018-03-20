import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateorderstatusComponent } from './updateorderstatus.component';

describe('UpdateorderstatusComponent', () => {
  let component: UpdateorderstatusComponent;
  let fixture: ComponentFixture<UpdateorderstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateorderstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateorderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
