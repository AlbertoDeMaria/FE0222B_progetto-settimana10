import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDOComponent } from './to-do.component';

describe('ToDOComponent', () => {
  let component: ToDOComponent;
  let fixture: ComponentFixture<ToDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
