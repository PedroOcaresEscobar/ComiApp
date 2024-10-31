import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisEvaluacionesPage } from './mis-evaluaciones.page';

describe('MisEvaluacionesPage', () => {
  let component: MisEvaluacionesPage;
  let fixture: ComponentFixture<MisEvaluacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEvaluacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
