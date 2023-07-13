import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartformComponent } from './barchartform.component';

describe('BarchartformComponent', () => {
  let component: BarchartformComponent;
  let fixture: ComponentFixture<BarchartformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarchartformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
