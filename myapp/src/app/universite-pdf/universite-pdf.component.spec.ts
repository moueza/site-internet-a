import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitePdfComponent } from './universite-pdf.component';

describe('UniversitePdfComponent', () => {
  let component: UniversitePdfComponent;
  let fixture: ComponentFixture<UniversitePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
