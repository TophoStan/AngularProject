import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Route,
  Router,
} from '@angular/router';
import { IBook, IUser } from '@schoolproject/data';
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
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: IBook | undefined = {
    id: '0',
    title: '',
    summary: '',
    rating: 0,
    price: 0,
  };
  staticBook: IBook | undefined;
  user: IUser | null = null;
  bookId: string | null = null;
  bookExists: boolean = false;
  faCheck = faCheck;
  faX = faTimes;
  selectedBookList: any | null = 'standard';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '');
    this.route.paramMap.subscribe((params) => {
      this.bookId = params.get('id');
      //Edit
      if (this.bookId) {
        this.bookExists = true;
        this.bookService.getBookById(this.bookId).subscribe((result) => {
          console.log(result);

          this.book = result;
          this.staticBook = result;
        });
        //Create
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
    console.log(this.selectedBookList);
    if (!(this.selectedBookList == 'standard')) {
      this.userService
        .addBookToBookListUser(this.selectedBookList, this.bookId!)
        .subscribe((result) => {
          console.log(result);
        });
    }
  }
}
