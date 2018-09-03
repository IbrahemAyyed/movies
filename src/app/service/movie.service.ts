import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(public firebase: AngularFireDatabase) { }
    movieList: AngularFireList<any>;
  
  form = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    releaseDate: new FormControl(Date, Validators.required),
    type: new FormControl('', Validators.required),
  });

  getMovies(){
    this.movieList = this.firebase.list('movies');
    return this.movieList.snapshotChanges();
  }

  insertMovies(movie){
    this.movieList.push({
      title: movie.title,
      director: movie.director,
      releaseDate: movie.releaseDate,
      type: movie.type
    });
  }

  populateForm(movie){
    this.form.setValue(movie);
  }

  updateMovie(movie){
    this.movieList.update(movie.$key,{
      title: movie.title,
      director: movie.director,
      releaseDate: movie.releaseDate,
      type: movie.type
    });
  }

  deleteMovie($key: string){
    this.movieList.remove($key);
  }
}


