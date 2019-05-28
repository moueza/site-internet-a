import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungS10Component } from './samsung-s10.component';

describe('SamsungS10Component', () => {
  let component: SamsungS10Component;
  let fixture: ComponentFixture<SamsungS10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungS10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungS10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
