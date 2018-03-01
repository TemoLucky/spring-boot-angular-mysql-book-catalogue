import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { BooksComponent } from './books/books.component';
import {ServerService} from './server.service';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import { FavouritesComponent } from './favourites/favourites.component';
import {FavService} from './fav.service';

const appRoutes: Routes = [
  { path: '', canActivate: [AuthGuard], component: HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'books', canActivate: [AuthGuard], component: BooksComponent},
  { path: 'favourites', canActivate: [AuthGuard], component: FavouritesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    BooksComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService, AuthGuard, AuthService, FavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
