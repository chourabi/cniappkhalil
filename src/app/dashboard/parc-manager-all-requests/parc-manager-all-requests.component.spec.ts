import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcManagerAllRequestsComponent } from './parc-manager-all-requests.component';

describe('ParcManagerAllRequestsComponent', () => {
  let component: ParcManagerAllRequestsComponent;
  let fixture: ComponentFixture<ParcManagerAllRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcManagerAllRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcManagerAllRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
