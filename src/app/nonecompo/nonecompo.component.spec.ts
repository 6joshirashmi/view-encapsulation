import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonecompoComponent } from './nonecompo.component';

describe('NonecompoComponent', () => {
  let component: NonecompoComponent;
  let fixture: ComponentFixture<NonecompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonecompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonecompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
