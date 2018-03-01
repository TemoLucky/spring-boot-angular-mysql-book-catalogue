import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Book} from './books/book.model';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(user: any) {
    return this.http.post('api/login', user);
  }
  getBooksFromServer() {
    return this.http.get('api/getBooks');
  }

  getFavouriteBooksFromServer() {
    return this.http.get('api/getFavourites');
  }

  deleteFavouritebook(id: number) {
    return this.http.post('api/deleteFavouriteBook', id);
  }

  addBookToFavourite(book: Book) {
    return this.http.post('api/addBookToFavourite', book);
  }
}
