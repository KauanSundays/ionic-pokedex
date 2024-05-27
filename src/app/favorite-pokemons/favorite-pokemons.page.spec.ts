import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritePokemonsPage } from './favorite-pokemons.page';

describe('FavoritePokemonsPage', () => {
  let component: FavoritePokemonsPage;
  let fixture: ComponentFixture<FavoritePokemonsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePokemonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
