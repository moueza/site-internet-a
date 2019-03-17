import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaKeywordsComponent } from './meta-keywords.component';

describe('MetaKeywordsComponent', () => {
  let component: MetaKeywordsComponent;
  let fixture: ComponentFixture<MetaKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
