import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserAddComponent } from './pages/user/user-add/user-add.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserPageComponent } from './pages/user/user-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'user',
    component: UserPageComponent,
    children: [
      { path: ':id/edit', pathMatch: 'full', component: UserEditComponent },
      { path: 'new', pathMatch: 'full', component: UserAddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
