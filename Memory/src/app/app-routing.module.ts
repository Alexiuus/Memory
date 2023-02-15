import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGameComponent } from './card-game/card-game.component';
import { homePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'homePage', component: homePageComponent},
  { path: 'Game', component: CardGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
