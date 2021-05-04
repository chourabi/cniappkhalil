import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVehiculeRequestComponent } from './add-new-vehicule-request.component';

describe('AddNewVehiculeRequestComponent', () => {
  let component: AddNewVehiculeRequestComponent;
  let fixture: ComponentFixture<AddNewVehiculeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewVehiculeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVehiculeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
