import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbarchartComponent } from './editbarchart.component';

describe('EditbarchartComponent', () => {
  let component: EditbarchartComponent;
  let fixture: ComponentFixture<EditbarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
