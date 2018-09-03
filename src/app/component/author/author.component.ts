import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})

export class AuthorComponent implements OnInit {
  submitted: boolean;
  show: boolean;
  formControls = this.movieService.form.controls;
  constructor(public movieService: MovieService) { }

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
      //update
      this.movieService.updateMovie(this.movieService.form.value)
      this.show = true;
      setTimeout(() => this.show = false, 3000);
      this.submitted = false;
      this.movieService.form.reset();
    }
  }
}
