import { IBook } from './book.model';

export interface IBookList {
  id: string;
  name: string;
  description: string;
  books: IBook[];
}
