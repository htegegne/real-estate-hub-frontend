import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRealtorComponent } from './create-realtor.component';

describe('CreateRealtorComponent', () => {
  let component: CreateRealtorComponent;
  let fixture: ComponentFixture<CreateRealtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRealtorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRealtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
