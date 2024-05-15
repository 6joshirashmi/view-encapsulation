import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedgrandchildComponent } from './emulatedgrandchild.component';

describe('EmulatedgrandchildComponent', () => {
  let component: EmulatedgrandchildComponent;
  let fixture: ComponentFixture<EmulatedgrandchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmulatedgrandchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmulatedgrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
