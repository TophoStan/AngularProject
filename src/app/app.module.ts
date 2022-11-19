import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
