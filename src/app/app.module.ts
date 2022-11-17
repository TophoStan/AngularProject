import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserPageComponent } from './pages/user/user-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserAddComponent } from './pages/user/user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomepageComponent,
    UserPageComponent,
    NavbarComponent,
    FooterComponent,
    UserEditComponent,
    UserAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
