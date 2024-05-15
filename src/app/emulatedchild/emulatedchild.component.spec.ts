import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedchildComponent } from './emulatedchild.component';

describe('EmulatedchildComponent', () => {
  let component: EmulatedchildComponent;
  let fixture: ComponentFixture<EmulatedchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmulatedchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmulatedchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
