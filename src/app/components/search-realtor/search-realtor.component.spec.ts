import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRealtorComponent } from './search-realtor.component';

describe('SearchRealtorComponent', () => {
  let component: SearchRealtorComponent;
  let fixture: ComponentFixture<SearchRealtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRealtorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchRealtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
