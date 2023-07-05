import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavChuckComponent } from './nav-chuck.component';

describe('NavChuckComponent', () => {
  let component: NavChuckComponent;
  let fixture: ComponentFixture<NavChuckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavChuckComponent]
    });
    fixture = TestBed.createComponent(NavChuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
