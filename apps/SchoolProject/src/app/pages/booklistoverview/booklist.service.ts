import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookList, IUser } from '@schoolproject/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

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
      `${environment.API_URL}data-api/booklist`,
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
      `${environment.API_URL}data-api/booklist/${id}`,
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
      `${environment.API_URL}data-api/booklist/`,
      bookList,
      {
        headers: headers,
      }
    );
  }
  updateBookList(bookList: IBookList): Observable<IBookList> {
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.put<IBookList>(
      `${environment.API_URL}data-api/booklist/${bookList.id}`,
      bookList,
      {
        headers: headers,
      }
    );
  }
}
