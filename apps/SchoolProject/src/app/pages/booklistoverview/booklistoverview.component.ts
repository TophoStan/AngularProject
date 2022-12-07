import { Component, OnInit } from '@angular/core';
import { IBookList } from '@schoolproject/data';
import { BooklistService } from './booklist.service';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booklistoverview',
  templateUrl: './booklistoverview.component.html',
  styleUrls: ['./booklistoverview.component.scss'],
})
export class BooklistoverviewComponent implements OnInit {
  booklists: IBookList[] = [];
  bookIcon = faBook;

  constructor(private booklistService: BooklistService) {}

  ngOnInit(): void {
    this.booklistService.getBookLists().subscribe((lists) => {
      this.booklists = lists;
      console.log(lists);
    });
  }
}
