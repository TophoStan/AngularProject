import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '@schoolproject/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly books: IBook[] = [];

  getBooks(): Observable<IBook[]> {
    console.log('getAllBooks aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<IBook[]>(
      'http://localhost:3333/api/data-api/book',
      {
        headers: headers,
      }
    );
  }

  deleteBookById(id: number) {}
  getBookById(id: string): Observable<IBook> {
    console.log('getBookById aangeroepen');
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<IBook>(
      `http://localhost:3333/api/data-api/book/${id}`,
      {
        headers: headers,
      }
    );
  }
  addBook(book: IBook) {}
  updateBook(newBook: IBook) {}

  constructor(private httpClient: HttpClient) {}
}
