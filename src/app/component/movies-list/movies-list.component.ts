import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
  submitted: boolean;
  show: boolean;
  formControls = this.movieService.form.controls;

  constructor(public movieService: MovieService) {
  }

  movies = [];
  showDelete: boolean;
  searchText: string = "";

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      list => {
        this.movies = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.movieService.form.valid) {
      if (this.movieService.form.get('$key').value == null)
        //insert
        this.movieService.insertMovies(this.movieService.form.value);
      else
        //update
        this.movieService.updateMovie(this.movieService.form.value)
      this.show = true;
      setTimeout(() => this.show = false, 3000);
      this.submitted = false;
      this.movieService.form.reset();
    }
  }

  onDelete($key) {
    if (confirm("Are you sure you want to Delete This Movie?")) {
      this.movieService.deleteMovie($key);
      this.showDelete = true;
      setTimeout(() => this.showDelete = false, 3000);
    }
  }

  //this is search
  title(movie) {
    return movie.title.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  releaseDate(movie) {
    return movie.releaseDate.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  director(movie) {
    return movie.director.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  type(movie) {
    return movie.type.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
  //end of search
}
