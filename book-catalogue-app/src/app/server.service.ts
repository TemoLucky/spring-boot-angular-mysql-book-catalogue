import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(user: any) {
    return this.http.post('http://localhost:8080/login', user);
  }
  getBooksFromServer() {
    return this.http.get('http://localhost:8080/getBooks');
  }

  getFavouriteBooksFromServer() {
    return this.http.get('http://localhost:8080/getFavourites');
  }

  deleteFavouritebook(id: number) {
    return this.http.post('http://localhost:8080/deleteFavouriteBook', id);
  }

}
