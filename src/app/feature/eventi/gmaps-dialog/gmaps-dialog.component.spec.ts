import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GmapsDialogComponent } from "./gmaps-dialog.component";

describe("GoogleMapsComponent", () => {
  let component: GmapsDialogComponent;
  let fixture: ComponentFixture<GmapsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GmapsDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
