import { Component, OnInit } from '@angular/core';
import { IBookList } from '@schoolproject/data';
import { BooklistService } from './booklist.service';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-booklistoverview',
  templateUrl: './booklistoverview.component.html',
  styleUrls: ['./booklistoverview.component.scss'],
})
export class BooklistoverviewComponent implements OnInit {
  booklists: IBookList[] = [];
  bookIcon = faBook;
  isLoggedIn = false;

  constructor(
    private booklistService: BooklistService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.booklistService.getBookLists().subscribe((lists) => {
      this.booklists = lists;
      console.log(lists);
    });
    this.authService.loggedStatus.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }
}
