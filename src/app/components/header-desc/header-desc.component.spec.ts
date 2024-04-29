import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDescComponent } from './header-desc.component';

describe('HeaderDescComponent', () => {
  let component: HeaderDescComponent;
  let fixture: ComponentFixture<HeaderDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
