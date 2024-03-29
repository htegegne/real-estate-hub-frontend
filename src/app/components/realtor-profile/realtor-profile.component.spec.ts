import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorProfileComponent } from './realtor-profile.component';

describe('RealtorProfileComponent', () => {
  let component: RealtorProfileComponent;
  let fixture: ComponentFixture<RealtorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtorProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealtorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
