import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserAddEditComponent } from './pages/user/user-add-edit/user-add-edit.component';
import { UserPageComponent } from './pages/user/user-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'user/new', pathMatch: 'full', component: UserAddEditComponent },
  { path: 'user/:id/edit', pathMatch: 'full', component: UserAddEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
