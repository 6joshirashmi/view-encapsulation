import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonechildComponent } from './nonechild.component';

describe('NonechildComponent', () => {
  let component: NonechildComponent;
  let fixture: ComponentFixture<NonechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonechildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
