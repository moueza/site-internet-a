import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDePingPongComponent } from './tables-de-ping-pong.component';

describe('TablesDePingPongComponent', () => {
  let component: TablesDePingPongComponent;
  let fixture: ComponentFixture<TablesDePingPongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesDePingPongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesDePingPongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
