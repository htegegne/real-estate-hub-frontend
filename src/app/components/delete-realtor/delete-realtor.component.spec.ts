import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRealtorComponent } from './delete-realtor.component';

describe('DeleteRealtorComponent', () => {
  let component: DeleteRealtorComponent;
  let fixture: ComponentFixture<DeleteRealtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteRealtorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteRealtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
