export class Book {
  public id: number;
  public title: string;
  public year: string;
  public author: string;
  public isbn: string;

  constructor(id: number, title: string, year: string, author: string, isbn: string) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.author = author;
    this.isbn = isbn;
  }
}
