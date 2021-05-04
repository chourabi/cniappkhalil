import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVehiculeDetailsComponent } from './request-vehicule-details.component';

describe('RequestVehiculeDetailsComponent', () => {
  let component: RequestVehiculeDetailsComponent;
  let fixture: ComponentFixture<RequestVehiculeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestVehiculeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVehiculeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
