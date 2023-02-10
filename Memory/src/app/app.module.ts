import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { homePageComponent } from './home-page/home-page.component';
import { CardGameComponent } from './card-game/card-game.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    homePageComponent,
    CardGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
