import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  pokemon: any;
  fromFavorites: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getPokemonDetails(id);
    }

    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras && navigation.extras.state) {
      this.fromFavorites = navigation.extras.state['fromFavorites'];
    }
  }

  getPokemonDetails(id: string) {
    this.httpService.getPokemonDetails(+id).subscribe((data: any) => {
      this.pokemon = data;
    });
  }

  goHome() {
    if (this.fromFavorites) {
      this.router.navigate(['/favorite-pokemons']);
    } else {
      this.router.navigate(['/']);
    }
  }

  getTranslatedType(type: string): string {
    return this.translationService.translateType(type);
  }
}
