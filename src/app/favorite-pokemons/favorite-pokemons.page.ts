import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-pokemons',
  templateUrl: './favorite-pokemons.page.html',
  styleUrls: ['./favorite-pokemons.page.scss'],
})
export class FavoritePokemonsPage implements OnInit {
  favoritePokemons: any[] = [];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.getFavoritePokemons();
  }

  capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  getFavoritePokemons(): void {
    const favoritePokemons = JSON.parse(localStorage.getItem('favoritePokemons') || '[]');
    this.favoritePokemons = favoritePokemons;
  }

  showPokemon(id: number) {
    this.router.navigate([`/pokemon-details`, id], { state: { fromFavorites: true } });
  }
}
