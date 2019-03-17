import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NOCOUNTRYFOROLDMENPistonFilmComponent } from './no-country-for-old-men-piston-film.component';

describe('NOCOUNTRYFOROLDMENPistonFilmComponent', () => {
  let component: NOCOUNTRYFOROLDMENPistonFilmComponent;
  let fixture: ComponentFixture<NOCOUNTRYFOROLDMENPistonFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NOCOUNTRYFOROLDMENPistonFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NOCOUNTRYFOROLDMENPistonFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
