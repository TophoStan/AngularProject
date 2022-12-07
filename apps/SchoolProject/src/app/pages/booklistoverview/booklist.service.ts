import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookList, IUser } from '@schoolproject/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooklistService {
  constructor(private httpClient: HttpClient) {}

  getBookLists(): Observable<IBookList[]> {
    console.log('getBookLists aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<IBookList[]>(
      'http://localhost:3333/api/data-api/booklist',
      {
        headers: headers,
      }
    );
  }
  getBookListById(id: string): Observable<IBookList> {
    console.log('getBookListById aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<IBookList>(
      `http://localhost:3333/api/data-api/booklist/${id}`,
      {
        headers: headers,
      }
    );
  }
  addBookList(bookList: IBookList) {
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.post<IBookList>(
      `http://localhost:3333/api/data-api/booklist/`,
      bookList,
      {
        headers: headers,
      }
    );
  }
}
