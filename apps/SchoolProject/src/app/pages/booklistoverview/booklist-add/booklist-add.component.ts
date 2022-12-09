import { Component, OnInit } from '@angular/core';
import { IBookList } from '@schoolproject/data';
import { BooklistService } from '../booklist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booklist-add',
  templateUrl: './booklist-add.component.html',
  styleUrls: ['./booklist-add.component.css'],
})
export class BooklistAddComponent implements OnInit {
  booklistId: string | null = null;
  booklistExists: boolean = false;
  booklist: IBookList = {
    id: '0',
    name: '',
    description: '',
    books: [],
  };
  constructor(
    private route: ActivatedRoute,
    private booklistservice: BooklistService,
    private router: Router
  ) {}

  onSubmit(): void {
    console.log('Creating booklist');

    if (this.booklistExists) {
      this.booklistservice.updateBookList(this.booklist).subscribe((result) => {
        console.log('updated booklist');
        console.log(result);

        this.router.navigate([`booklist/${this.booklistId}`]);
      });
    } else {
      this.booklistservice.addBookList(this.booklist).subscribe((result) => {
        console.log(result);
        this.router.navigate(['booklist']);
      });
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.booklistId = params.get('id');
      if (this.booklistId) {
        this.booklistExists = true;
        this.booklistservice
          .getBookListById(this.booklistId)
          .subscribe((result) => {
            this.booklist = result;
          });
      }
    });
  }
}
