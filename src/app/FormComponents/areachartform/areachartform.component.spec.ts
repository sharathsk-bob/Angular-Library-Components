import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreachartformComponent } from './areachartform.component';

describe('AreachartformComponent', () => {
  let component: AreachartformComponent;
  let fixture: ComponentFixture<AreachartformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreachartformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreachartformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
