import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowchildComponent } from './shadowchild.component';

describe('ShadowchildComponent', () => {
  let component: ShadowchildComponent;
  let fixture: ComponentFixture<ShadowchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShadowchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
