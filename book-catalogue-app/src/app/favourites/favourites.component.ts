import { Component, OnInit } from '@angular/core';
import {Book} from '../books/book.model';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favouriteBooks: Book[];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getFavouriteBooksFromServer().subscribe(
      response => {
        this.favouriteBooks = response.json();
        console.log(response);
      },
      error => console.log(error)
    );
  }

  deleteFavourite(id: number) {
    this.serverService.deleteFavouritebook(id).subscribe(
      response => {
        this.favouriteBooks.splice(id, 1);
        console.log(response);
      },
      error => console.log(error)
    );
  }
}
