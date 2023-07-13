import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartformComponent } from './piechartform.component';

describe('PiechartformComponent', () => {
  let component: PiechartformComponent;
  let fixture: ComponentFixture<PiechartformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiechartformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiechartformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
