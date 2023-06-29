import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianformComponent } from './accordianform.component';

describe('AccordianformComponent', () => {
  let component: AccordianformComponent;
  let fixture: ComponentFixture<AccordianformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
