import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.httpService.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results.map((pokemon: any) => {
        return {
          name: this.capitalizeFirstLetter(pokemon.name),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`
        };
      });
    });
  }

  capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  showPokemon(id: number){
    console.log("ID do pokémon: " + id)
  }
}
