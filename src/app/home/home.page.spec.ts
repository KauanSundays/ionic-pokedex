import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve alternar o status favorito de um Pokémon', () => {
    const pokemon = { id: 1, name: 'Pikachu', favorite: false };
    spyOn(window.localStorage, 'getItem').and.returnValue(JSON.stringify([]));
    spyOn(window.localStorage, 'setItem'); 
    component.pokemons = [pokemon];

    component.toggleFavorite(pokemon, new MouseEvent('click'));

    expect(pokemon.favorite).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalled(); 
  });
});
