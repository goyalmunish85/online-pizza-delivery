import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHttpExampleComponent } from './table-http-example.component';

describe('TableHttpExampleComponent', () => {
  let component: TableHttpExampleComponent;
  let fixture: ComponentFixture<TableHttpExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHttpExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHttpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
