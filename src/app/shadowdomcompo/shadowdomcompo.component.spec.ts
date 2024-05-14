import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowdomcompoComponent } from './shadowdomcompo.component';

describe('ShadowdomcompoComponent', () => {
  let component: ShadowdomcompoComponent;
  let fixture: ComponentFixture<ShadowdomcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowdomcompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShadowdomcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
