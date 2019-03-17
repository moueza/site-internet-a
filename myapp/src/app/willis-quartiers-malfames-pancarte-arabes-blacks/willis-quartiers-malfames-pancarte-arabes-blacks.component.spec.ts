import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillisQuartiersMalfamesPancarteArabesBlacksComponent } from './willis-quartiers-malfames-pancarte-arabes-blacks.component';

describe('WillisQuartiersMalfamesPancarteArabesBlacksComponent', () => {
  let component: WillisQuartiersMalfamesPancarteArabesBlacksComponent;
  let fixture: ComponentFixture<WillisQuartiersMalfamesPancarteArabesBlacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillisQuartiersMalfamesPancarteArabesBlacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillisQuartiersMalfamesPancarteArabesBlacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
