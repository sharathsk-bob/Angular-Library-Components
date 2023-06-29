import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaccordianComponent } from './editaccordian.component';

describe('EditaccordianComponent', () => {
  let component: EditaccordianComponent;
  let fixture: ComponentFixture<EditaccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaccordianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
