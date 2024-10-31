import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantesCercanosPage } from './restaurantes-cercanos.page';

describe('RestaurantesCercanosPage', () => {
  let component: RestaurantesCercanosPage;
  let fixture: ComponentFixture<RestaurantesCercanosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantesCercanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
