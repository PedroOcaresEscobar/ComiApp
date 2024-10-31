import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetasPagePage } from './recetas-page.page';

describe('RecetasPagePage', () => {
  let component: RecetasPagePage;
  let fixture: ComponentFixture<RecetasPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
