import {Component, Input, OnInit} from '@angular/core';
import {Book} from './book.model';
import {ServerService} from '../server.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private serverService: ServerService ) { }
  ngOnInit() {
    this.books = [
      new Book(1, 'Hamlet', '1132',
        'William Shakespeare', 'http://shop.folger.edu/istarimages/mp/003024!003-77_d.jpg'),
      new Book(2, 'Othello', '1132',
        'William Shakespeare', 'http://shop.folger.edu/istarimages/mp/003024!003-77_d.jpg'),
      new Book(3, 'Romel and Juliet', '1132',
        'William Shakespeare', 'http://shop.folger.edu/istarimages/mp/003024!003-77_d.jpg')
    ];
    this.serverService.getBooksFromServer().subscribe(
      (response) => {
        this.books = response.json();
      },
      (error) => console.log(error)
    );
  }
}
