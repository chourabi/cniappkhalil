import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeRequestListComponent } from './vehicule-request-list.component';

describe('VehiculeRequestListComponent', () => {
  let component: VehiculeRequestListComponent;
  let fixture: ComponentFixture<VehiculeRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
