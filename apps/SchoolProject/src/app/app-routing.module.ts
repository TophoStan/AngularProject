import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BookAddEditComponent } from './pages/book/book-add-edit/book-add-edit.component';
import { BookPageComponent } from './pages/book/book-page.component';
import { BookDetailComponent } from './pages/book/book-detail/book-detail.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserAddEditComponent } from './pages/user/user-add-edit/user-add-edit.component';
import { UserPageComponent } from './pages/user/user-page.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { BookListComponent } from './pages/book/book-list/book-list.component';
import { BooklistoverviewComponent } from './pages/booklistoverview/booklistoverview.component';
import { BooklistAddComponent } from './pages/booklistoverview/booklist-add/booklist-add.component';
import { BooklistDetailComponent } from './pages/booklistoverview/booklist-detail/booklist-detail.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'user/new', pathMatch: 'full', component: UserAddEditComponent },
  { path: 'user/:id/edit', pathMatch: 'full', component: UserAddEditComponent },
  { path: 'booklist', pathMatch: 'full', component: BooklistoverviewComponent },
  { path: 'booklist/new', pathMatch: 'full', component: BooklistAddComponent },
  {
    path: 'booklist/:id',
    pathMatch: 'full',
    component: BooklistDetailComponent,
  },
  {
    path: 'booklist/new',
    pathMatch: 'full',
    component: BooklistoverviewComponent,
  },
  {
    path: 'booklist/:id/edit',
    pathMatch: 'full',
    component: BooklistAddComponent,
  },
  { path: 'book', pathMatch: 'full', component: BookListComponent },
  { path: 'book/new', pathMatch: 'full', component: BookAddEditComponent },
  {
    path: 'book/:id/detail',
    pathMatch: 'full',
    component: BookDetailComponent,
  },
  { path: 'book/:id/edit', pathMatch: 'full', component: BookAddEditComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
