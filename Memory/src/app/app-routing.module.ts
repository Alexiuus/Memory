import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'homePage', component: homePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
