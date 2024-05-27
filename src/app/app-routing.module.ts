import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pokemon-details/:id',
    loadChildren: () => import('./pokemon-details/pokemon-details.module').then( m => m.PokemonDetailsPageModule)
  },
  {
    path: 'favorite-pokemons',
    loadChildren: () => import('./favorite-pokemons/favorite-pokemons.module').then( m => m.FavoritePokemonsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
