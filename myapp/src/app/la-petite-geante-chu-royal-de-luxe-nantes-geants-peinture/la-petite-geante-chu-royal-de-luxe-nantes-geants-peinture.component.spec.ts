import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPetiteGeanteChuRoyalDeLuxeNantesGeantsPeintureComponent } from './la-petite-geante-chu-royal-de-luxe-nantes-geants-peinture.component';

describe('LaPetiteGeanteChuRoyalDeLuxeNantesGeantsPeintureComponent', () => {
  let component: LaPetiteGeanteChuRoyalDeLuxeNantesGeantsPeintureComponent;
  let fixture: ComponentFixture<LaPetiteGeanteChuRoyalDeLuxeNantesGeantsPeintureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaPetiteGeanteChuRoyalDeLuxeNantesGeantsPeintureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaPetiteGeanteChuRoyalDeLuxeNantesGeantsPeintureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
