import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowgrandchildComponent } from './shadowgrandchild.component';

describe('ShadowgrandchildComponent', () => {
  let component: ShadowgrandchildComponent;
  let fixture: ComponentFixture<ShadowgrandchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowgrandchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShadowgrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
