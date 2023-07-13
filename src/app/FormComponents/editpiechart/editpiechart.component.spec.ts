import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpiechartComponent } from './editpiechart.component';

describe('EditpiechartComponent', () => {
  let component: EditpiechartComponent;
  let fixture: ComponentFixture<EditpiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpiechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
