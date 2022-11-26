import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Route,
  Router,
} from '@angular/router';
import { IBook } from '../book.model';
import { BookService } from '../book.service';
import {
  faCheck,
  faSchool,
  faExclamationCircle,
  faMarsStroke,
  faPencilAlt,
  faScroll,
  faTrash,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: IBook | undefined;
  staticBook: IBook | undefined;
  bookId: string | null = null;
  bookExists: boolean = false;
  faCheck = faCheck;
  faX = faTimes;

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
        this.bookExists = true;
        this.staticBook = this.bookService.getBookById(Number(this.bookId));
        this.book = {
          ...JSON.parse(
            JSON.stringify(this.bookService.getBookById(Number(this.bookId)))
          ),
        };
        //Create
      } else {
        this.book = {
          id: 0,
          title: '',
          summary: '',
          rating: 0,
          price: 0,
        };
      }
    });
  }
}
