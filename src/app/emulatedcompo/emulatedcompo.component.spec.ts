import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedcompoComponent } from './emulatedcompo.component';

describe('EmulatedcompoComponent', () => {
  let component: EmulatedcompoComponent;
  let fixture: ComponentFixture<EmulatedcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmulatedcompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmulatedcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
