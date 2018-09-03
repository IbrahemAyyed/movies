import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// this is the fire base 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { MovieService } from './service/movie.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthorComponent } from './component/author/author.component';
import { TypeComponent } from './component/type/type.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCvtk_nMQ3ujfeqjaHzRCuK_k0IyI0JY-U",
  authDomain: "movies-dba81.firebaseapp.com",
  databaseURL: "https://movies-dba81.firebaseio.com",
  projectId: "movies-dba81",
  storageBucket: "movies-dba81.appspot.com/",
  messagingSenderId: "592200208589"
};

const appRoutes: Routes =[
  { path: "", component: HomepageComponent },
  { path: "movies", component: MoviesListComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'type', component: TypeComponent },]

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    HomepageComponent,
    AuthorComponent,
    TypeComponent
  ],

  exports: [RouterModule],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [
    MovieService,
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
