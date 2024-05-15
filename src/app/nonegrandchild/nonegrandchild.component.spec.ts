import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonegrandchildComponent } from './nonegrandchild.component';

describe('NonegrandchildComponent', () => {
  let component: NonegrandchildComponent;
  let fixture: ComponentFixture<NonegrandchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonegrandchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonegrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
