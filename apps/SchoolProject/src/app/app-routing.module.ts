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

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'user/new', pathMatch: 'full', component: UserAddEditComponent },
  { path: 'user/:id/edit', pathMatch: 'full', component: UserAddEditComponent },
  { path: 'book', component: BookPageComponent },
  {
    path: 'book/:id/detail',
    pathMatch: 'full',
    component: BookDetailComponent,
  },
  { path: 'book/new', pathMatch: 'full', component: BookAddEditComponent },
  { path: 'book/:id/edit', pathMatch: 'full', component: BookAddEditComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
