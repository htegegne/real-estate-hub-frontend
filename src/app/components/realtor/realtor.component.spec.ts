import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorComponent } from './realtor.component';

describe('RealtorComponent', () => {
  let component: RealtorComponent;
  let fixture: ComponentFixture<RealtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
