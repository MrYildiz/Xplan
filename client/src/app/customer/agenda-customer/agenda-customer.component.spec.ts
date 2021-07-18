import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCustomerComponent } from './agenda-customer.component';

describe('AgendaCustomerComponent', () => {
  let component: AgendaCustomerComponent;
  let fixture: ComponentFixture<AgendaCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
