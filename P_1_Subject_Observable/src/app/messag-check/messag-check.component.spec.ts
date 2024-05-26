import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagCheckComponent } from './messag-check.component';

describe('MessagCheckComponent', () => {
  let component: MessagCheckComponent;
  let fixture: ComponentFixture<MessagCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
