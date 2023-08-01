import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditareachartComponent } from './editareachart.component';

describe('EditareachartComponent', () => {
  let component: EditareachartComponent;
  let fixture: ComponentFixture<EditareachartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditareachartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditareachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
