import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtcLogoComponent } from './dtc-logo.component';

describe('DtcLogoComponent', () => {
  let component: DtcLogoComponent;
  let fixture: ComponentFixture<DtcLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtcLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtcLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
