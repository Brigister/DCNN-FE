import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVideoclipComponent } from './manage-videoclip.component';

describe('ManageVideoclipComponent', () => {
  let component: ManageVideoclipComponent;
  let fixture: ComponentFixture<ManageVideoclipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVideoclipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVideoclipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
