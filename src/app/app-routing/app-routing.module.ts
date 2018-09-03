import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from '../component/movies-list/movies-list.component';
import { HomepageComponent } from '../component/homepage/homepage.component';
import { AuthorComponent } from '../component/author/author.component';
import { TypeComponent } from '../component/type/type.component';

const routes: Routes = [
  { path: 'movies', component: MoviesListComponent },
  { path: '', component: HomepageComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'type', component: TypeComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]

})
export class AppRoutingModule { }
