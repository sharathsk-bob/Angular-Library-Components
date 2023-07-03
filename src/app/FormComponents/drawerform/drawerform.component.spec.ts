import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerformComponent } from './drawerform.component';

describe('DrawerformComponent', () => {
  let component: DrawerformComponent;
  let fixture: ComponentFixture<DrawerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
