import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Route,
  Router,
} from '@angular/router';
import { IBook } from '@schoolproject/data';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-add-edit',
  templateUrl: './book-add-edit.component.html',
  styleUrls: ['./book-add-edit.component.css'],
})
export class BookAddEditComponent implements OnInit {
  book: IBook | undefined;
  staticBook: IBook | undefined;
  bookId: string | null = null;
  bookExists: boolean = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.bookId = params.get('id');
      //Edit
      if (this.bookId) {
        // this.bookExists = true;
        // this.staticBook = this.bookService.getBookById(this.bookId);
        // this.book = {
        //   ...JSON.parse(
        //     JSON.stringify(this.bookService.getBookById(Number(this.bookId)))
        //   ),
        // };
        // //Create
      } else {
        this.book = {
          id: '0',
          title: '',
          summary: '',
          rating: 0,
          price: 0,
        };
      }
    });
  }
  onSubmit() {
    if (this.bookExists) {
      this.bookService.updateBook(this.book!);
      this.router.navigate(['book']);
    } else {
      this.bookService.addBook(this.book!);
      this.router.navigate(['book']);
    }
  }
}
