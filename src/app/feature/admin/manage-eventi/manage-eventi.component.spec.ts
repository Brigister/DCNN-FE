import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventiComponent } from './manage-eventi.component';

describe('ManageEventiComponent', () => {
  let component: ManageEventiComponent;
  let fixture: ComponentFixture<ManageEventiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEventiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
