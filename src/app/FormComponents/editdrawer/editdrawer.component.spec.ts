import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdrawerComponent } from './editdrawer.component';

describe('EditdrawerComponent', () => {
  let component: EditdrawerComponent;
  let fixture: ComponentFixture<EditdrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
