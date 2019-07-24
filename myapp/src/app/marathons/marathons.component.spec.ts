import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonsComponent } from './marathons.component';

describe('MarathonsComponent', () => {
  let component: MarathonsComponent;
  let fixture: ComponentFixture<MarathonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarathonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarathonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
