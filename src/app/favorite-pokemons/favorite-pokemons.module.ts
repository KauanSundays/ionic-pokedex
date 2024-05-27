import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FavoritePokemonsPage } from './favorite-pokemons.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FavoritePokemonsPage
      }
    ])
  ],
  declarations: [FavoritePokemonsPage],
  providers: []
})
export class FavoritePokemonsPageModule {}
