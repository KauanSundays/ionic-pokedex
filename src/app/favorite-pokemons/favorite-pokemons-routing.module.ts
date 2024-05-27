import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritePokemonsPage } from './favorite-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritePokemonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritePokemonsPageRoutingModule {}
