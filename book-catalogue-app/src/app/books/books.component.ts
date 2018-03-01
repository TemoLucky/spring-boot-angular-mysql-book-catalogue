import {Component, Input, OnInit} from '@angular/core';
import {Book} from './book.model';
import {ServerService} from '../server.service';
import {FavService} from '../fav.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private serverService: ServerService ,
              private favService: FavService) {
    this.getFavBooks();
  }
  ngOnInit() {
    this.serverService.getBooksFromServer().subscribe(
      (response) => {
        this.books = response.json();
      },
      (error) => console.log(error)
    );
  }

  onAddBook(book: Book) {
    this.serverService.addBookToFavourite(book).subscribe(
      response => {
        // console.log(response);
      },
      error => console.log(error)
    );
    this.getFavBooks();
  }

  getInfo(book: Book) {
    // return this.containsObject(book, this.favService.favouriteBooks);
    return !!this.favService.favouriteBooks.filter(myBook => myBook.id === book.id).length;
  }

  getFavBooks() {
    this.serverService.getFavouriteBooksFromServer().subscribe(
      response => {
        this.favService.favouriteBooks = response.json();
      },
      error => console.log(error)
    );
  }
}
