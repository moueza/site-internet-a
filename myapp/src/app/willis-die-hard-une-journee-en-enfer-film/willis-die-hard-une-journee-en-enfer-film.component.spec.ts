import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillisDieHardUneJourneeEnEnferFilmComponent } from './willis-die-hard-une-journee-en-enfer-film.component';

describe('WillisDieHardUneJourneeEnEnferFilmComponent', () => {
  let component: WillisDieHardUneJourneeEnEnferFilmComponent;
  let fixture: ComponentFixture<WillisDieHardUneJourneeEnEnferFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillisDieHardUneJourneeEnEnferFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillisDieHardUneJourneeEnEnferFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
