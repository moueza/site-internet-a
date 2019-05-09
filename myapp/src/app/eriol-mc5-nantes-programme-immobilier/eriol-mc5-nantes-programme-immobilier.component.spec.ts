import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EriolMC5NantesProgrammeImmobilierComponent } from './eriol-mc5-nantes-programme-immobilier.component';

describe('EriolMC5NantesProgrammeImmobilierComponent', () => {
  let component: EriolMC5NantesProgrammeImmobilierComponent;
  let fixture: ComponentFixture<EriolMC5NantesProgrammeImmobilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EriolMC5NantesProgrammeImmobilierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EriolMC5NantesProgrammeImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
