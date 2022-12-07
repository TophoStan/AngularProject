import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook, IBookList, IUser } from '@schoolproject/data';
import { BooklistService } from '../../booklistoverview/booklist.service';
import { BookService } from '../book.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  bookList: IBookList = {
    id: '0',
    name: '',
    description: '',
    books: [],
  };
  booklistId: string | null = null;
  booklistExists: boolean = false;
  user: IUser = {
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    isStudent: false,
    roles: ['user'],
  };

  constructor(
    private booklistService: BooklistService,
    private authservice: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '');
    this.route.paramMap.subscribe((params) => {
      this.booklistId = params.get('id');
      if (this.booklistId) {
        this.booklistExists = true;
        this.booklistService
          .getBookListById(this.booklistId)
          .subscribe((booklist: IBookList) => {
            this.bookList = booklist;
            this.books = booklist.books;
            console.log(booklist);
          });
      }
    });
  }
}
