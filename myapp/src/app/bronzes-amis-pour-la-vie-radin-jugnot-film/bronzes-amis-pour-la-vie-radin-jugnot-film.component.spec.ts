import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BronzesAmisPourLaVieRadinJugnotFilmComponent } from './bronzes-amis-pour-la-vie-radin-jugnot-film.component';

describe('BronzesAmisPourLaVieRadinJugnotFilmComponent', () => {
  let component: BronzesAmisPourLaVieRadinJugnotFilmComponent;
  let fixture: ComponentFixture<BronzesAmisPourLaVieRadinJugnotFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BronzesAmisPourLaVieRadinJugnotFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BronzesAmisPourLaVieRadinJugnotFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
