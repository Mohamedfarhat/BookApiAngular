import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(public serv: BookService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.serv.getAllBooks();
  }


  fillItem(book) {
    this.serv.book.id = book.id;
    this.serv.book.title = book.title;
    this.serv.book.author = book.author;
    this.serv.book.numberOfPages = book.numberOfPages;
    this.serv.book.publishedAt = book.publishedAt.split('T')[0];
    //console.log(book.publishedAt.split('T')[0]);
    //new Date(this.datepipe.transform(book.publishedAt, 'MM/dd/yyyy'));
  }

  deleteBook(id) {
    this.serv.deleteBook(id).subscribe(res => {
      this.serv.getAllBooks();
    });
  }

}
