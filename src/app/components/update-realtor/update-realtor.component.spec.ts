import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRealtorComponent } from './update-realtor.component';

describe('UpdateRealtorComponent', () => {
  let component: UpdateRealtorComponent;
  let fixture: ComponentFixture<UpdateRealtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRealtorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateRealtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
