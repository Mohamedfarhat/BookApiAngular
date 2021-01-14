import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  constructor(public ser: BookService) { }

  ngOnInit(): void {
    this.ser.book = {
      id: 0,
      title: null,
      author: null,
      numberOfPages: null,
      publishedAt: null



    }
  }
  restForm(myform: NgForm) {
    myform.reset();
    this.ser.book = {
      id: 0,
      title: null,
      author: null,
      numberOfPages: null,
      publishedAt: null
    }
  }
  onSubmit(myform: NgForm) {
    if (this.ser.book.id == 0) {
      this.ser.postBook().subscribe(res => {
        this.ser.getAllBooks();
      },
        err => {
          console.log(err);
        });
    } else {
      this.ser.puttBook().subscribe(res => {
        this.ser.getAllBooks();
      },
        err => {
          console.log(err);
        });
    }
    this.restForm(myform);

  }

}
