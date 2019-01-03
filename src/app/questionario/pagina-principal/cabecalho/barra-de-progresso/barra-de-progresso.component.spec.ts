import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeProgressoComponent } from './barra-de-progresso.component';

describe('BarraDeProgressoComponent', () => {
  let component: BarraDeProgressoComponent;
  let fixture: ComponentFixture<BarraDeProgressoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraDeProgressoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDeProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
