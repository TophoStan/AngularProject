import { Component, OnInit } from '@angular/core';
import { IBookList } from '@schoolproject/data';
import { BooklistService } from '../booklist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist-add',
  templateUrl: './booklist-add.component.html',
  styleUrls: ['./booklist-add.component.css'],
})
export class BooklistAddComponent implements OnInit {
  booklist: IBookList = {
    id: '0',
    name: '',
    description: '',
    books: [],
  };
  constructor(
    private booklistservice: BooklistService,
    private router: Router
  ) {}

  onSubmit(): void {
    console.log('Creating booklist');

    this.booklistservice.addBookList(this.booklist).subscribe((result) => {
      console.log(result);
      this.router.navigate(['booklist']);
    });
  }

  ngOnInit(): void {}
}
