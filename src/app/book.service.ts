import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = "http://localhost:53688/api/books";

  books: Book[];
  book: Book;

  constructor(private http: HttpClient) {

  }

  getAllBooks() {
    this.http.get(this.apiUrl).toPromise().then(
      res => { this.books = res as Book[]; }
    )
  }

  postBook() {
    return this.http.post(this.apiUrl, this.book);
  }
  puttBook() {
    return this.http.put(this.apiUrl + "/" + this.book.id, this.book);
  }
  deleteBook(id){
    return this.http.delete(this.apiUrl + "/" + id);
  }
}
