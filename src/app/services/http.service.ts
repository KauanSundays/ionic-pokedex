import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private favoritePokemons: any[] = [];

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

  getPokemonDetails(id: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getFavoritePokemons(): any[] {
    return this.favoritePokemons;
  }

  addFavoritePokemon(pokemon: any): void {
    if (!this.isFavoritePokemon(pokemon)) {
      this.favoritePokemons.push(pokemon);
    }
  }

  removeFavoritePokemon(pokemon: any): void {
    const index = this.favoritePokemons.findIndex(p => p.id === pokemon.id);
    if (index !== -1) {
      this.favoritePokemons.splice(index, 1);
    }
  }

  isFavoritePokemon(pokemon: any): boolean {
    return this.favoritePokemons.some(p => p.id === pokemon.id);
  }
}
