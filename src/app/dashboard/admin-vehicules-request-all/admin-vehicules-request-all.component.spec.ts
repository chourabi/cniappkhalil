import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVehiculesRequestAllComponent } from './admin-vehicules-request-all.component';

describe('AdminVehiculesRequestAllComponent', () => {
  let component: AdminVehiculesRequestAllComponent;
  let fixture: ComponentFixture<AdminVehiculesRequestAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVehiculesRequestAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVehiculesRequestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
