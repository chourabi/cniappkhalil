import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVehiculesRequestsComponent } from './admin-vehicules-requests.component';

describe('AdminVehiculesRequestsComponent', () => {
  let component: AdminVehiculesRequestsComponent;
  let fixture: ComponentFixture<AdminVehiculesRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVehiculesRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVehiculesRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
