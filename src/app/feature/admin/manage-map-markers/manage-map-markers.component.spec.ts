import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMapMarkersComponent } from './manage-map-markers.component';

describe('ManageMapMarkersComponent', () => {
  let component: ManageMapMarkersComponent;
  let fixture: ComponentFixture<ManageMapMarkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMapMarkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMapMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
