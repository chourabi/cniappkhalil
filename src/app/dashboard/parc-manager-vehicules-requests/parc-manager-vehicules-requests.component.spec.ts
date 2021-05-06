import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcManagerVehiculesRequestsComponent } from './parc-manager-vehicules-requests.component';

describe('ParcManagerVehiculesRequestsComponent', () => {
  let component: ParcManagerVehiculesRequestsComponent;
  let fixture: ComponentFixture<ParcManagerVehiculesRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcManagerVehiculesRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcManagerVehiculesRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
