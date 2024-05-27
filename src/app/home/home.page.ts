import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];

  constructor(
    private httpService: HttpService,
    private router: Router,
    private toastController: ToastController
  ) {}

  getPokemons() {
    this.httpService.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results.map((pokemon: any) => {
        return {
          name: this.capitalizeFirstLetter(pokemon.name),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`,
          id: pokemon.url.split('/')[6]
        };
      });
    });
  }

  capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  showPokemon(id: number) {
    this.router.navigate([`/pokemon-details`, id]);
  }

  async toggleFavorite(pokemon: any) {
    pokemon.favorite = !pokemon.favorite;
    
    const favoritePokemons = JSON.parse(localStorage.getItem('favoritePokemons') || '[]');
    const index = favoritePokemons.findIndex((p: any) => p.id === pokemon.id);
    if (pokemon.favorite && index === -1) {
      favoritePokemons.push(pokemon);
    } else if (!pokemon.favorite && index !== -1) {
      favoritePokemons.splice(index, 1);
    }
    localStorage.setItem('favoritePokemons', JSON.stringify(favoritePokemons));
  
    const message = pokemon.favorite ? 'Adicionado aos favoritos' : 'Removido dos favoritos';
    await this.presentToast(message);
}

  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  
  ngOnInit() {
    const favoritePokemonIds = JSON.parse(localStorage.getItem('favoritePokemonIds') || '[]');
  
    this.getPokemons();
  
    this.httpService.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results.map((pokemon: any) => {
        const id = pokemon.url.split('/')[6];
        const isFavorite = favoritePokemonIds.includes(id);
        return {
          name: this.capitalizeFirstLetter(pokemon.name),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          id: id,
          favorite: isFavorite
        };
      });
    });
  }
  
  goToFavorites() {
    this.router.navigate(['/favorite-pokemons']);
  }
}
