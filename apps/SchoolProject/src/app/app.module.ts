import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserPageComponent } from './pages/user/user-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddEditComponent } from './pages/user/user-add-edit/user-add-edit.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BookPageComponent } from './pages/book/book-page.component';
import { BookListComponent } from './pages/book/book-list/book-list.component';
import { BookAddEditComponent } from './pages/book/book-add-edit/book-add-edit.component';
import { BookCardComponent } from './pages/book/book-list/book-card/book-card.component';
import { BookDetailComponent } from './pages/book/book-detail/book-detail.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { JwtModule } from '@nestjs/jwt';
// import { IUser } from '@schoolproject/data';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomepageComponent,
    UserPageComponent,
    NavbarComponent,
    FooterComponent,
    UserAddEditComponent,
    AboutPageComponent,
    BookPageComponent,
    BookListComponent,
    BookAddEditComponent,
    BookCardComponent,
    BookDetailComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
