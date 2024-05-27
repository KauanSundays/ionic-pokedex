import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getPokemonDetails(id);
    }
  }

  getPokemonDetails(id: string) {
    this.httpService.getPokemonDetails(+id).subscribe((data: any) => {
      this.pokemon = data;
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
